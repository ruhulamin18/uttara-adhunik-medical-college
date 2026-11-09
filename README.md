# Uttara Adhunik Medical College | UAMC

A responsive institutional website for Uttara Adhunik Medical College. The project includes a public-facing college website and an authenticated admin area, built with the Next.js App Router and TypeScript.

## Features

### Public website

- Homepage with a hero section, college introduction, department search, facilities, admissions banner, and notices.
- Dedicated pages for About, Departments, Facilities, Admissions, Notices & Media, Career, and Contact.
- Responsive navigation with a sticky main navbar, searchable departments, and mobile navigation.
- Interactive page sections, including facilities and admissions tabs and notice filters.
- Contact actions that open a prefilled email draft in the visitor's email application.
- Shared header and footer across public pages.

### Admin area

- Credentials-based sign-in at `/admin/login`.
- Protected admin routes; unauthenticated visitors are redirected to the sign-in page.
- Passwords are hashed with bcrypt before storage.
- Admin dashboard with navigation to notices, admissions, and career areas.
- The notice, admissions, and career management pages are currently placeholders; content creation and editing are not implemented.

> Public-facing content and interactive sections are currently presented by the website UI. Although Prisma models exist for notices, departments, gallery items, and admissions information, the public pages and admin placeholders are not yet wired to provide a complete content-management workflow.

## Routes

| Route | Description |
| --- | --- |
| `/` | Homepage |
| `/about` | College information |
| `/departments` | Department directory and search |
| `/facilities` | Facilities and services |
| `/admissions` | Admission information |
| `/notice` | Notices and media |
| `/career` | Career information |
| `/contact` | Contact information |
| `/admin/login` | Admin sign-in |
| `/admin/dashboard` | Protected admin dashboard |
| `/admin/notices` | Notice-management placeholder |
| `/admin/admissions` | Admissions-management placeholder |
| `/admin/jobs` | Career-management placeholder |

## Technology

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS 4, Lucide React
- **Authentication:** NextAuth.js credentials provider
- **Database/ORM:** SQLite and Prisma
- **Password hashing:** bcryptjs

## Requirements

- Node.js 20.9 or later
- npm

## Local setup

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and configure admin credentials and an authentication secret:

   ```dotenv
   AUTH_SECRET="your-generated-secret"
   ADMIN_EMAIL="admin@example.com"
   ADMIN_PASSWORD="use-a-strong-unique-password"
   ADMIN_NAME="UAMC Administrator"
   ```

   Generate a secret with Node.js:

   ```bash
   node -e "console.log(require('node:crypto').randomBytes(32).toString('base64'))"
   ```

   `ADMIN_NAME` is optional. `NEXTAUTH_SECRET` is also accepted as a fallback for `AUTH_SECRET`. Keep `.env` private and never commit real credentials.

3. Create or update the SQLite database schema, then seed the admin account:

   ```bash
   npx prisma db push
   npx prisma db seed
   ```

   The seed creates an admin only if the configured email does not already exist. It does not change the password of an existing account. It also inserts sample notices only when the notices table is empty.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build; run `npm run build` first |

To check a production build locally:

```bash
npm run build
npm run start
```

## Project structure

```text
app/
  (auth)/admin/login/   Admin sign-in page
  (site)/               Public pages and shared public-site layout
  admin/                 Protected dashboard and admin sections
  api/auth/              NextAuth route handler
  globals.css            Tailwind imports and global design tokens
  layout.tsx             Root HTML shell and site metadata
components/
  admissions/            Admissions page content
  career/                Career and contact content
  departments/           Department directory
  home/                  Homepage sections
  notice/                Notice and media content
  shared/                Navbar, footer, and admin sign-out control
lib/
  prisma.ts              Shared Prisma client
prisma/
  schema.prisma          SQLite data models
  seed.ts                Admin and sample-notice seed script
public/
  assets/                Static assets
  images/                Website imagery
  icons/                 Icon assets
auth.ts                  NextAuth configuration
```

## Database notes

The Prisma datasource is SQLite, configured in `prisma/schema.prisma` to use `prisma/dev.db`. The schema currently defines `AdminUser`, `Notice`, `Department`, `GalleryItem`, and `AdmissionInfo` models. The checked-in local database is intended for development; plan an appropriate persistent database before deploying to an environment where local files are not durable.

## License

No license has been specified for this project.
