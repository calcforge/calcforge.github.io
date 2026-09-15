Object.assign(CALCULATORS, {
  'mortgage-calculator': {
    title: 'Mortgage Calculator', category: 'Finance',
    description: 'Estimate monthly mortgage payments, total interest and total repayment from home price, down payment, interest rate and loan term.',
    formula: 'M = P × [r(1+r)^n] ÷ [(1+r)^n − 1]',
    example: 'A $300,000 home with a $60,000 down payment, 6.5% rate and 30-year term produces an estimated principal-and-interest payment before taxes, insurance and other costs.', live: true,
    fields: [['price','Home price','$','number',300000],['down','Down payment','$','number',60000],['rate','Annual interest rate','%','number',6.5],['years','Loan term','years','number',30]],
    calc:v=>{const P=Math.max(0,v.price-v.down),r=v.rate/100/12,n=v.years*12;if(r===0){const m=P/n;return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Total principal $'+P.toLocaleString(undefined,{maximumFractionDigits:0})+' • interest $0 at 0%.'}}const m=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1),total=m*n;return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Total payments $'+total.toLocaleString(undefined,{maximumFractionDigits:0})+' • estimated interest $'+(total-P).toLocaleString(undefined,{maximumFractionDigits:0})+'.'}},
    faqs:[['Does this include property taxes and insurance?','No. This result estimates principal and interest. Add property tax, homeowners insurance, HOA fees and mortgage insurance separately for a full housing payment.'],['Is the down payment subtracted from the home price?','Yes. The calculator uses the home price minus the down payment as the starting loan principal.']]
  },
  'loan-calculator': {
    title:'Loan Calculator', category:'Finance',
    description:'Calculate an estimated monthly loan payment, total repayment and total interest from loan amount, interest rate and term.',
    formula:'Payment = P × [r(1+r)^n] ÷ [(1+r)^n − 1]',
    example:'A $25,000 loan at 8% for 5 years produces a fixed-payment estimate using monthly compounding.', live:true,
    fields:[['amount','Loan amount','$','number',25000],['rate','Annual interest rate','%','number',8],['years','Loan term','years','number',5]],
    calc:v=>{const P=v.amount,r=v.rate/100/12,n=v.years*12;if(r===0){const m=P/n;return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Total repayment $'+P.toLocaleString(undefined,{maximumFractionDigits:0})+'.'}}const m=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1),total=m*n;return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Total repayment $'+total.toLocaleString(undefined,{maximumFractionDigits:0})+' • interest $'+(total-P).toLocaleString(undefined,{maximumFractionDigits:0})+'.'}},
    faqs:[['Does this work for personal loans?','Yes. It uses a standard fixed-payment amortization model that can be used for many installment loans. Verify the lender terms, fees and compounding method.'],['Are fees included?','No. Origination fees, insurance, taxes and other lender charges should be evaluated separately.']]
  },
  'auto-loan-calculator': {
    title:'Auto Loan Calculator', category:'Finance',
    description:'Estimate a car loan monthly payment, total interest and repayment from vehicle price, down payment, rate and term.',
    formula:'Monthly payment = P × [r(1+r)^n] ÷ [(1+r)^n − 1]',
    example:'A $30,000 vehicle with $5,000 down, 7% APR and a 60-month term is evaluated as a fixed auto loan.', live:true,
    fields:[['price','Vehicle price','$','number',30000],['down','Down payment','$','number',5000],['rate','APR','%','number',7],['months','Loan term','months','number',60]],
    calc:v=>{const P=Math.max(0,v.price-v.down),r=v.rate/100/12,n=v.months;if(r===0){const m=P/n;return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Estimated repayment $'+P.toLocaleString(undefined,{maximumFractionDigits:0})+'.'}}const m=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1),total=m*n;return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Total repayment $'+total.toLocaleString(undefined,{maximumFractionDigits:0})+' • interest $'+(total-P).toLocaleString(undefined,{maximumFractionDigits:0})+'.'}},
    faqs:[['Does the calculation include sales tax?','No. Enter the financed vehicle amount you want to model. Taxes, registration, dealer fees and add-ons can be included by adjusting the financed amount.'],['Can I compare loan terms?','Yes. Change the rate or term and compare the monthly payment and total interest.']]
  },
  'car-loan-calculator': {
    title:'Car Loan Calculator', category:'Finance',
    description:'Calculate an estimated monthly car payment and total interest using the vehicle price, down payment, APR and loan length.',
    formula:'Payment = P × [r(1+r)^n] ÷ [(1+r)^n − 1]',
    example:'For a $22,000 car, $2,000 down, 6.9% APR and 48 months, the calculator estimates the fixed monthly payment.', live:true,
    fields:[['price','Car price','$','number',22000],['down','Down payment','$','number',2000],['rate','APR','%','number',6.9],['months','Loan term','months','number',48]],
    calc:v=>{const P=Math.max(0,v.price-v.down),r=v.rate/100/12,n=v.months;if(r===0){const m=P/n;return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Total repayment $'+P.toLocaleString(undefined,{maximumFractionDigits:0})+'.'}}const m=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1),total=m*n;return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Total repayment $'+total.toLocaleString(undefined,{maximumFractionDigits:0})+' • interest $'+(total-P).toLocaleString(undefined,{maximumFractionDigits:0})+'.'}},
    faqs:[['What is the difference between this and an auto loan calculator?','They use the same core installment-loan math. The labels are tailored to car shoppers and vehicle financing.'],['Should I compare total interest as well as monthly payment?','Yes. A longer term can reduce the monthly payment while increasing total interest paid.']]
  },
  'mortgage-payoff-calculator': {
    title:'Mortgage Payoff Calculator', category:'Finance',
    description:'Estimate how extra monthly payments can reduce mortgage payoff time and interest compared with the original schedule.',
    formula:'Remaining balance follows the standard amortization schedule; extra payment reduces principal each month.',
    example:'Enter a $250,000 balance at 6% over 30 years and compare the standard payment with an additional $200 each month.', live:true,
    fields:[['balance','Current mortgage balance','$','number',250000],['rate','Annual interest rate','%','number',6],['years','Remaining term','years','number',30],['extra','Extra monthly payment','$','number',200]],
    calc:v=>{const P=v.balance,r=v.rate/100/12,n=Math.round(v.years*12),extra=Math.max(0,v.extra);if(r===0){const base=P/n,baseMonths=n,extraMonths=Math.ceil(P/(base+extra));return{main:extraMonths+' months to pay off',sub:'Estimated time saved '+Math.max(0,baseMonths-extraMonths)+' months with the extra payment.'}}const base=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);let bal=P,months=0,intExtra=0;while(bal>0.01&&months<n*2){const interest=bal*r;const pay=Math.min(bal+interest,base+extra);bal=Math.max(0,bal+interest-pay);intExtra+=interest;months++;if(months>1200)break}const baseInterest=base*n-P;return{main:months+' months to pay off',sub:'Standard schedule '+n+' months • estimated time saved '+Math.max(0,n-months)+' months • interest avoided depends on the exact payment schedule.'}},
    faqs:[['Does an extra payment always reduce the term?','When the extra amount is applied to principal and the loan permits principal prepayment, it generally reduces the remaining balance faster. Confirm your lender rules.'],['Does this include refinancing?','No. It compares the existing amortization schedule with an added monthly principal payment.']]
  },
  'mortgage-affordability-calculator': {
    title:'Mortgage Affordability Calculator', category:'Finance',
    description:'Estimate a potential mortgage amount from gross monthly income, debt payments, interest rate and loan term using a chosen debt-to-income limit.',
    formula:'Housing budget = income × DTI limit − other monthly debt; mortgage principal is derived from the payment formula.',
    example:'With $7,000 gross monthly income, $1,000 existing debt, a 36% DTI limit, 6.5% rate and 30 years, the tool estimates a principal-only affordability range.', live:true,
    fields:[['income','Gross monthly income','$','number',7000],['debt','Other monthly debt','$','number',1000],['dti','Target DTI','%','number',36],['rate','Mortgage rate','%','number',6.5],['years','Loan term','years','number',30]],
    calc:v=>{const budget=Math.max(0,v.income*v.dti/100-v.debt),r=v.rate/100/12,n=v.years*12;if(r===0)return{main:'$'+(budget*n).toLocaleString(undefined,{maximumFractionDigits:0})+' estimated loan',sub:'Estimated principal-only payment budget $'+budget.toLocaleString(undefined,{maximumFractionDigits:0})+' / month.'};const P=budget*(1-Math.pow(1+r,-n))/r;return{main:'$'+P.toLocaleString(undefined,{maximumFractionDigits:0})+' estimated loan',sub:'Principal-and-interest budget $'+budget.toLocaleString(undefined,{maximumFractionDigits:0})+' / month at '+v.dti+'% DTI.'}},
    faqs:[['Is this a lender approval calculation?','No. It is an affordability estimate. Lenders may use different DTI limits, income rules, credit criteria, taxes, insurance and property-specific costs.'],['Does the result include taxes and insurance?','No. The available payment budget is treated as principal and interest in this simplified model.']]
  },
  'loan-amortization-calculator': {
    title:'Loan Amortization Calculator', category:'Finance',
    description:'Calculate fixed loan payments and summarize total principal and interest across an amortizing loan term.',
    formula:'Payment = P × [r(1+r)^n] ÷ [(1+r)^n − 1]',
    example:'A $50,000 balance at 7% for 7 years is modeled as a monthly amortizing loan.', live:true,
    fields:[['amount','Loan amount','$','number',50000],['rate','Annual interest rate','%','number',7],['years','Loan term','years','number',7]],
    calc:v=>{const P=v.amount,r=v.rate/100/12,n=v.years*12;if(r===0)return{main:'$'+(P/n).toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Principal $'+P.toLocaleString(undefined,{maximumFractionDigits:0})+' • interest $0.'};const m=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1),total=m*n;return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Principal $'+P.toLocaleString(undefined,{maximumFractionDigits:0})+' • interest $'+(total-P).toLocaleString(undefined,{maximumFractionDigits:0})+' • '+n+' payments.'}},
    faqs:[['What is amortization?','Amortization is the process of paying a fixed or scheduled loan balance over time, with each payment split between interest and principal.'],['Can the payment change?','This calculator assumes a fixed rate and fixed monthly payment. Adjustable-rate loans require a different model.']]
  },
  'monthly-payment-calculator': {
    title:'Monthly Payment Calculator', category:'Finance',
    description:'Estimate the monthly payment for a fixed-rate installment loan from principal, annual interest rate and repayment term.',
    formula:'M = P × [r(1+r)^n] ÷ [(1+r)^n − 1]',
    example:'Enter $15,000 at 9% annual interest over 4 years to estimate the monthly installment.', live:true,
    fields:[['amount','Principal','$','number',15000],['rate','Annual interest rate','%','number',9],['years','Repayment term','years','number',4]],
    calc:v=>{const P=v.amount,r=v.rate/100/12,n=v.years*12;if(r===0)return{main:'$'+(P/n).toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Zero-interest installment estimate.'};const m=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);return{main:'$'+m.toLocaleString(undefined,{maximumFractionDigits:2})+' / month',sub:'Estimated total repayment $'+(m*n).toLocaleString(undefined,{maximumFractionDigits:0})+'.'}},
    faqs:[['What loans can this estimate?','It can estimate many fixed-rate installment loans, including personal, auto and other consumer loans when the payment schedule is monthly.'],['Does it account for fees?','No. The result is based on principal and interest only. Add financed fees to the principal if appropriate.']]
  }
});
PLANNED.push(
  ['Finance','Mortgage Calculator','mortgage-calculator'],
  ['Finance','Loan Calculator','loan-calculator'],
  ['Finance','Auto Loan Calculator','auto-loan-calculator'],
  ['Finance','Car Loan Calculator','car-loan-calculator'],
  ['Finance','Mortgage Payoff Calculator','mortgage-payoff-calculator'],
  ['Finance','Mortgage Affordability Calculator','mortgage-affordability-calculator'],
  ['Finance','Loan Amortization Calculator','loan-amortization-calculator'],
  ['Finance','Monthly Payment Calculator','monthly-payment-calculator']
);