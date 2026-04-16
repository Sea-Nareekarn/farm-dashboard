# farm-dashboard - Frontend (Web) 🌾

![Status](https://img.shields.io/badge/Status-Active--Development-green?style=for-the-badge)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.dot.js)](https://nextjs.org/)
[![shadcn/ui](https://img.shields.io/badge/UI-shadcn/ui-000000?logo=shadcnui)](https://ui.shadcn.com/)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?logo=vercel)](https://vercel.com/)

---

## Project Overview
The **Farm Dashboard Frontend** is a modern, responsive web application designed to manage agri-business financial data. Built with **Next.js 15**, it provides a seamless user experience for tracking income and expenses directly from the farm.

---

## 🏗️ Technical Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Infrastructure:** Vercel (Frontend) & Railway (Backend)

---

## 🚀 Implementation Roadmap

### Phase 1: The "Vertical Slice" (Current Focus 🏗️)
*Goal: Prove the connection from UI to DB.*
- [ ] Initialize Next.js 15 with TypeScript & Tailwind CSS.
- [ ] Setup **shadcn/ui** core configuration.
- [ ] Deploy initial scaffold to **Vercel**.
- [ ] **End-to-End Test:** Implement a single route to fetch data from the .NET API to verify the connection.

### Phase 2: Dashboard & Overview
- [ ] Design the **Overview UI** (Financial summary cards and main charts).
- [ ] Integrate Overview API endpoints to display real-time farm data.

### Phase 3: Transaction Management (CRUD)
- [ ] Build **UI Dialogs** for Creating, Editing, and Deleting transactions using shadcn/ui.
- [ ] Connect CRUD operations to the Backend API.
- [ ] Implement **Search & Filter** functionality for transaction history.

---

## 🔌 API Integration Details
The frontend interacts with the .NET 10 Backend via the following logic:
- **Base URL:** Managed via Environment Variables for seamless Vercel deployment.
- **Data Models:** TypeScript interfaces are mapped directly to C# DTOs to ensure type safety across the stack.

---

