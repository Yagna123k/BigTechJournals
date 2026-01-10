# Big Tech Journals

## Complete Frontend UI Flow (MVP + User Accounts)

---

## ROLES OVERVIEW

1. Guest (Not logged in)
2. User (Logged in reader)
3. Admin (Editor + Platform manager)

Each role builds on the previous one.

---

# 1. GUEST USER FLOW (Not Logged In)

### Purpose

* Discover content
* Read stories
* Get value
* Be nudged to sign up for engagement actions

---

## Public Interfaces

### 1. Home Page `/`

**Sections**

* Header

  * Logo
  * Stories
  * Categories
  * Submit Your Story
  * Login / Sign Up
* Hero section

  * Tagline
  * Short value proposition
  * CTA: Read Stories
* Featured Stories
* Trending Stories
* Categories preview
* Newsletter signup
* Footer

---

### 2. Stories Listing Page `/stories`

**Features**

* Story cards

  * Cover image
  * Title
  * Excerpt
  * Category
  * Read time
  * View count
* Filters

  * By category
* Sort

  * Latest
  * Most viewed

---

### 3. Category Page `/category/[slug]`

* Category description
* Stories under that category
* Same story card layout as listing page

---

## Single Story Page `/stories/[slug]`

### Visible

* Title
* Cover image
* Category
* Published date
* Read time
* View count
* Story content

**Story Connect Section**

* Short label: Connect with the featured person
* Social links (shown only if provided)

  * LinkedIn
  * Twitter
  * Instagram

This section appears:

* After the story content
* Or in a compact sidebar on desktop

---

### Engagement Actions

* Like button
* Comment preview
* Save story
* Share buttons


**Restricted interactions**

* Like → prompts login
* Comment → prompts login
* Save → prompts login

---

### 5. Submit Your Story Page `/submit`

**Form**

* Full name
* Email
* LinkedIn URL
* Story title
* Category
* Story content input or file upload
* Notes for editors

**States**

* Success submission screen
* Error validation state

---

### 6. About Page `/about`

* Platform purpose
* What kind of stories are accepted
* Editorial standards

---

### 7. Contact Page `/contact`

* Contact form
* Partnership option
* Sponsorship option

---

### 8. Auth Pages

* Login `/login`
* Signup `/signup`
* Email verification
* Forgot password

---

# 2. LOGGED-IN USER FLOW (Reader Account)

### Purpose

* Engage with content
* Save value
* Build habit
* Minimal social footprint

---

## User-Specific Interfaces

### 9. User Profile Page `/profile`

**Sections**

* Profile header

  * Name
  * Email
  * Profile image
* Saved Stories
* Account settings link

---

### 10. Saved Stories Page `/profile/saved`

* List of bookmarked stories
* Ability to remove saved stories
* Empty state UI

---

### 11. Account Settings `/profile/settings`

* Update name
* Update profile photo
* Change email
* Logout
* Delete account (optional later)

---

### 12. Story Interaction (Logged In)

On single story page:

* Like story
* Comment on story
* Save story
* Remove like or save

---

### 13. Comment System

**Features**

* Add comment
* Delete own comment
* View comment timestamp
* Basic moderation placeholder

---

### 14. Engagement Feedback UI

* Toast on like
* Toast on save
* Inline validation messages
* Login-required modals

---

# 3. ADMIN FLOW (Core Platform Control)

### Purpose

* Content quality
* Platform trust
* Growth control

---

## Admin Interfaces

### 15. Admin Login `/admin/login`

---

### 16. Admin Dashboard `/admin`

**Overview cards**

* Total stories
* Pending submissions
* Total views
* Total users

---

### 17. Story Submissions Inbox `/admin/submissions`

* List of submitted stories
* Status tags

  * Pending
  * Approved
  * Rejected
* Preview submission
* Open editor

---

### 18. Story Editor `/admin/stories/editor`

**Editor Features**

* Title
* Slug auto-generation
* Category assignment
* Cover image upload
* Rich text editor
* SEO metadata

  * Meta title
  * Meta description
* Publish
* Save draft
* Schedule publish

---

### 19. Published Stories Management `/admin/stories`

* View all stories
* Edit story
* Unpublish
* Delete
* View engagement stats per story

---

### 20. Category Management `/admin/categories`

* Create category
* Edit category
* Disable category
* Category ordering

---

### 21. Comment Moderation `/admin/comments`

* View all comments
* Filter by story
* Delete comments
* Flag spam

---

### 22. User Management `/admin/users`

* View users list
* Disable user
* View user activity summary

---

### 23. Analytics Dashboard `/admin/analytics`

* Most viewed stories
* Engagement trends
* Growth over time

---

### 24. Admin Settings `/admin/settings`

* Platform name
* Meta defaults
* Submission guidelines text
* Maintenance mode toggle

---

# 4. GLOBAL UI ELEMENTS (All Roles)

### Header

* Role-based navigation
* Sticky behavior
* Mobile responsive

---

### Footer

* About
* Contact
* Submit story
* Social links

---

### Modals

* Login required
* Confirm delete
* Success feedback
* Error states

---

### Empty States

* No stories
* No saved articles
* No comments
* No submissions

---

### Error Pages

* 404 Not Found
* 500 Server Error
* Unauthorized access

---

# 5. FRONTEND STATE MANAGEMENT YOU SHOULD PLAN FOR

* Auth state
* Role-based rendering
* Story read tracking
* Optimistic UI for likes and saves
* Pagination and loading skeletons
* SEO metadata per page

---

# 6. FINAL ARCHITECTURAL PRINCIPLE

> Content-first, engagement-second, social-last.

This keeps Big Tech Journals:

* Trustworthy
* Scalable
* Focused
* Not noisy
