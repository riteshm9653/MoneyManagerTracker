# Money Manager

Money Manager is a full-stack personal finance application. Users can create an account, record income and expenses, organize transactions with categories, view dashboard analytics, filter transaction history, and download or email monthly Excel reports.

This directory contains the React frontend. The Spring Boot backend is in the sibling `../moneymanager` directory.

## AI Project Context

Use this section as the source of truth before generating or changing frontend code.

### Product behavior

- Unauthenticated users see the landing page at `/home` and can use `/login` or `/signup`.
- The root route `/` checks `localStorage.token`: authenticated users go to `/dashboard`; other users go to `/home`.
- Authenticated users can manage categories, income, and expenses from the dashboard shell.
- Income and expense pages show a trend chart, current-month transaction list, add modal, delete confirmation, Excel download, and email-report action.
- Categories have a name, type (`income` or `expense`), and optional emoji/image icon. Categories can be created and edited.
- Amounts are displayed in Indian rupee format using the Indian numbering system.
- Signup optionally uploads a profile image to Cloudinary before registering the user.
- The application uses toast notifications for success and error feedback.

### Frontend architecture

- `src/App.jsx`: React Router route definitions and the root authentication redirect.
- `src/main.jsx`: React entry point and `AppContextProvider` mounting.
- `src/pages/`: route-level screens: landing page, login, signup, dashboard, income, expense, category, and filters.
- `src/components/`: reusable dashboard layout, forms, modals, transaction lists, charts, navigation, and feedback components.
- `src/context/AppContext.jsx`: current user state and logout-related state clearing.
- `src/hooks/useUser.jsx`: loads the authenticated profile and redirects to login when authentication fails.
- `src/util/axiosConfig.jsx`: shared Axios client, API base URL, JWT request interceptor, and 401/500 handling.
- `src/util/apiEndpoints.js`: centralized backend endpoint constants.
- `src/util/util.js`: Indian currency formatting and chart data preparation.
- `src/assets/assets.js`: image assets and sidebar navigation metadata.

### Routes

| Route | Screen | Access |
| --- | --- | --- |
| `/` | Authentication-based redirect | Public |
| `/home` | Landing page | Public |
| `/login` | Login form | Public |
| `/signup` | Registration with optional profile image | Public |
| `/dashboard` | Balance, income, expense, recent transactions, and charts | Authenticated |
| `/income` | Income chart, list, add/delete, download, and email report | Authenticated |
| `/expense` | Expense chart, list, add/delete, download, and email report | Authenticated |
| `/category` | Add, view, and edit categories | Authenticated |
| `/filter` | Filter and sort transactions | Authenticated |

## Backend Contract

The backend is Spring Boot 3.5.3 with Java 21. Its servlet context path is `/api/v1.0`, so the frontend currently calls `http://localhost:8080/api/v1.0`.

All endpoints below are relative to `/api/v1.0`.

| Method | Endpoint | Purpose | Auth |
| --- | --- | --- | --- |
| `POST` | `/login` | Authenticate and return a JWT plus user data | No |
| `POST` | `/register` | Create a profile | No |
| `GET` | `/activate?token=...` | Activate a profile | No |
| `GET` | `/status` or `/health` | Health check | No |
| `GET` | `/profile` | Load the current user profile | Yes |
| `GET` | `/dashboard` | Load dashboard totals and recent transactions | Yes |
| `GET` | `/categories` | Load the current user's categories | Yes |
| `POST` | `/categories` | Create a category | Yes |
| `GET` | `/categories/{type}` | Load categories by income or expense type | Yes |
| `PUT` | `/categories/{categoryId}` | Update a category | Yes |
| `GET` | `/incomes` | Load current-month income | Yes |
| `POST` | `/incomes` | Create income | Yes |
| `DELETE` | `/incomes/{id}` | Delete income | Yes |
| `GET` | `/expenses` | Load current-month expenses | Yes |
| `POST` | `/expenses` | Create expense | Yes |
| `DELETE` | `/expenses/{id}` | Delete expense | Yes |
| `POST` | `/filter` | Filter and sort income or expense transactions | Yes |
| `GET` | `/excel/download/income` | Download income Excel file | Yes |
| `GET` | `/excel/download/expense` | Download expense Excel file | Yes |
| `GET` | `/email/income-excel` | Email income report | Yes |
| `GET` | `/email/expense-excel` | Email expense report | Yes |

The frontend sends `Authorization: Bearer <token>` for protected requests. Login, registration, activation, health, and status requests omit the token.

### Backend layers

- `controller/`: REST endpoints listed above.
- `service/`: profile/authentication, categories, income, expenses, dashboard, Excel, and email business logic.
- `repository/`: Spring Data JPA repositories.
- `entity/`: `ProfileEntity`, `CategoryEntity`, `IncomeEntity`, and `ExpenseEntity`.
- `dto/`: request and response objects exchanged with the frontend.
- `security/`: JWT request filtering and authenticated-user handling.
- `config/`: Spring Security, CORS, and application configuration.

The backend uses JPA/Hibernate with MySQL and SMTP for email. Database, SMTP, JWT, and Cloudinary values are environment-specific and must never be committed to source control.

## Frontend Stack

- React 18, React Router 7, and Vite 6
- Axios for API requests
- Tailwind CSS 4
- Recharts for financial charts
- Lucide React for icons
- `react-hot-toast` for notifications
- `emoji-picker-react` for transaction and category icons
- Moment for date formatting

## Project Structure

```text
moneymanagerwebapp/
	src/
		App.jsx             # Routes and auth redirect
		main.jsx            # React entry point
		pages/              # Route-level screens
		components/         # Reusable UI and feature components
		context/            # Global user context
		hooks/              # Authentication/profile hook
		util/               # Axios, endpoints, validation, formatting, uploads
		assets/             # Images and sidebar metadata
	public/               # Static public files
	package.json
	vite.config.js
```

## Run Locally

### Frontend

```bash
cd moneymanagerwebapp
npm install
npm run dev
```

The Vite server normally runs at `http://localhost:5173`.

```bash
npm run build
npm run lint
npm run preview
```

### Backend

From the sibling backend directory:

```bash
cd ../moneymanager
./mvnw spring-boot:run
```

On Windows, use `mvnw.cmd spring-boot:run`. Create the MySQL database and provide local database, SMTP, JWT, and frontend-origin settings before starting the backend.

## Frontend Development Rules

1. Keep API paths in `src/util/apiEndpoints.js`; do not scatter endpoint strings across components.
2. Use `axiosConfig` for backend calls so JWT handling and common error behavior remain consistent.
3. Authenticated screens render through `Dashboard`; public screens use `Header`.
4. Preserve validation, loading states, empty states, toast feedback, and modal close behavior.
5. Reuse existing components such as `Input`, `Modal`, `DeleteAlert`, `TransactionInfoCard`, and the chart components.
6. Keep backend field names consistent: transactions use `name`, `amount`, `date`, `icon`, and `categoryId`; categories use `name`, `type`, and `icon`.
7. Do not hardcode credentials, JWT secrets, database passwords, SMTP passwords, or Cloudinary secrets in React code or documentation.
8. After changes, run `npm run lint` and `npm run build` from `moneymanagerwebapp`.

## Integration Notes

- The API base URL is currently hardcoded in `src/util/apiEndpoints.js`; use an environment variable when adding multi-environment deployment support.
- `/incomes` and `/expenses` return current-month records according to backend service logic.
- Excel downloads require Axios `responseType: "blob"`.
- Profile images are uploaded to Cloudinary, then the resulting URL is sent during registration.
