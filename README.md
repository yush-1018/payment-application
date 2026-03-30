# Payment Retry & Recovery System

This project is about building a reliable payment system that can handle failures properly.
In real-world apps, payments often fail due to network issues, duplicate requests, or delayed responses from the gateway. The goal here is to make sure that every payment either succeeds correctly or fails safely — without confusion.

---

## Project Info

* **Title:** Payment Retry & Recovery System
* **Type:** Application Development
* **Year:** 1st Year, CSE (AI)

### Team Members

* Prateek Kumar (251810700102)
* Ayush Raj (251810700122)

---

## Tech Stack

* React.js (Frontend)
* Node.js + Express (Backend)
* PostgreSQL / MongoDB (Database)
* Redis (for retry queue)

---

## Problem

Payments can fail for many reasons:

* Network issues
* Duplicate requests
* Delayed webhooks
* Insufficient balance
* Large transactions

These failures can lead to bad user experience or even money-related issues.

---

## Solution

We designed a system that:

* Retries failed payments automatically
* Prevents duplicate transactions using idempotency
* Handles delayed webhook responses
* Ensures every payment reaches a final state

---

## How It Works

```
User → API → Database → Payment Gateway → Webhook → Retry → Final State
```

If a payment fails, it is added to a retry queue and processed again until it is completed or marked failed.

---

## Features

* Payment initiation
* Gateway integration (Stripe / Razorpay / Mock)
* Retry mechanism
* Idempotency keys
* Webhook handling
* Failure recovery
* Final state tracking

---

## System Design (Basic Idea)

Main components:

* Payments (final status)
* Payment Attempts (retry history)
* Webhook Events (avoid duplicate processing)
* Retry Queue (handles failed payments)

---

## Database Entities

* Users
* Loans
* Payments
* PaymentAttempts
* RetryJobs
* WebhookEvents
* EscrowWallet

---

## API Example

### Apply Loan

POST /loan/apply

```json
{
  "user_id": "U1",
  "amount": 2000
}
```

### Repay Loan

POST /loan/repay

```json
{
  "loan_id": "L123",
  "amount": 2000
}
```

---

## Timeline

* W1–W2: Setup and DB design
* W3–W4: Payment API + Gateway
* W5–W6: Idempotency + Retry system
* W7: Webhooks
* W8–W10: Processing + testing
* W11–W12: Deployment and demo

---

## Challenges

* Handling duplicate payments
* Managing delayed webhooks
* Keeping system state consistent

---

## Success Criteria

* No duplicate payments
* All payments reach a final state
* Retry system works properly

---

## Contributors

* Prateek Kumar
* Ayush Raj

---

## Note

This project helped us understand how real payment systems work.
Failures are common — handling them properly is what really matters.

---
