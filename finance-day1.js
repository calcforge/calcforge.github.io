Object.assign(CALCULATORS, {

  'roth-ira-calculator': {
    title:'Roth IRA Calculator', category:'Finance',
    description:'Estimate Roth IRA future value from current savings, monthly contributions, years and an assumed annual return.',
    formula:'FV = P(1+r)^n + PMT × [((1+r)^n − 1) ÷ r]',
    example:'Start with $5,000, add $500 monthly for 20 years and assume a 7% annual return to estimate a projected future balance.', live:true,
    fields:[['balance','Current balance','
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
);,'number',5000],['contribution','Monthly contribution','
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
);,'number',500],['rate','Annual return','%','number',7],['years','Years','years','number',20]],
    calc:v=>{const r=v.rate/100/12,n=v.years*12,P=v.balance,PMT=v.contribution;if(r===0){const total=P+PMT*n;return{main:'
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
);+total.toLocaleString(undefined,{maximumFractionDigits:0})+' projected balance',sub:'Contributions and starting balance total 
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
);+total.toLocaleString(undefined,{maximumFractionDigits:0})+'.'}}const fv=P*Math.pow(1+r,n)+PMT*((Math.pow(1+r,n)-1)/r);const contributed=P+PMT*n;return{main:'
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
);+fv.toLocaleString(undefined,{maximumFractionDigits:0})+' projected balance',sub:'Total contributions 
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
);+contributed.toLocaleString(undefined,{maximumFractionDigits:0})+' • projected growth 
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
);+(fv-contributed).toLocaleString(undefined,{maximumFractionDigits:0})+'.'}},
    faqs:[['Is the return guaranteed?','No. This is a compound-growth projection using an assumed constant return. Actual investment returns vary.'],['Does this calculate current IRA contribution limits?','No. Verify current contribution limits, eligibility and tax rules separately.']]
  },
  'ira-calculator': {
    title:'IRA Calculator', category:'Finance',
    description:'Estimate IRA savings growth from a current balance, recurring contribution, investment return and time horizon.',
    formula:'Future value uses monthly compounding of the starting balance and recurring contributions.',
    example:'A $2,000 starting balance plus $300 monthly for 25 years at an assumed 6% annual return illustrates long-term compound growth.', live:true,
    fields:[['balance','Current balance','
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
);,'number',2000],['contribution','Monthly contribution','
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
);,'number',300],['rate','Annual return','%','number',6],['years','Years','years','number',25]],
    calc:v=>{const r=v.rate/100/12,n=v.years*12,P=v.balance,PMT=v.contribution;if(r===0){const total=P+PMT*n;return{main:'
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
);+total.toLocaleString(undefined,{maximumFractionDigits:0})+' projected balance',sub:'Starting balance plus contributions: 
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
);+total.toLocaleString(undefined,{maximumFractionDigits:0})+'.'}}const fv=P*Math.pow(1+r,n)+PMT*((Math.pow(1+r,n)-1)/r);const contributed=P+PMT*n;return{main:'
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
);+fv.toLocaleString(undefined,{maximumFractionDigits:0})+' projected balance',sub:'Total contributions 
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
);+contributed.toLocaleString(undefined,{maximumFractionDigits:0})+' • projected growth 
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
);+(fv-contributed).toLocaleString(undefined,{maximumFractionDigits:0})+'.'}},
    faqs:[['Is this a tax calculation?','No. It is a savings-growth projection. Tax treatment depends on the IRA type and current rules.'],['Are returns guaranteed?','No. The annual return is an assumption for scenario planning.']]
  },
  'sales-tax-calculator': {
    title:'Sales Tax Calculator', category:'Finance',
    description:'Calculate sales tax, final price and pre-tax price from a purchase amount and tax rate.',
    formula:'Tax = Price × rate; Final price = Price + Tax',
    example:'An $80 purchase at 7.5% tax produces $6 tax and an $86 final price.', live:true,
    fields:[['price','Pre-tax price','
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
);,'number',80],['rate','Sales tax rate','%','number',7.5]],
    calc:v=>{const tax=v.price*v.rate/100,total=v.price+tax;return{main:'
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
);+total.toLocaleString(undefined,{maximumFractionDigits:2})+' final price',sub:'Sales tax 
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
);+tax.toLocaleString(undefined,{maximumFractionDigits:2})+' • pre-tax price 
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
);+v.price.toLocaleString(undefined,{maximumFractionDigits:2})+'.'}},
    faqs:[['Does this know my local tax rate?','No. Enter the applicable rate for the jurisdiction and transaction.'],['Can it reverse-calculate a tax-inclusive total?','This version calculates tax from a pre-tax price.']}
  },
  'discount-calculator': {
    title:'Discount Calculator', category:'Finance',
    description:'Calculate discount amount and sale price from an original price and percentage discount.',
    formula:'Discount = Price × rate; Sale price = Price − Discount',
    example:'A $100 item with a 20% discount saves $20 and costs $80 before tax.', live:true,
    fields:[['price','Original price','
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
);,'number',100],['discount','Discount','%','number',20]],
    calc:v=>{const saved=v.price*v.discount/100,final=v.price-saved;return{main:'
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
);+final.toLocaleString(undefined,{maximumFractionDigits:2})+' sale price',sub:'You save 
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
);+saved.toLocaleString(undefined,{maximumFractionDigits:2})+' • original price 
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
);+v.price.toLocaleString(undefined,{maximumFractionDigits:2})+'.'}},
    faqs:[['Does this include sales tax?','No. The result is the discounted price before any tax.'],['Can I use it for percentage-off sales?','Yes. Enter the original price and advertised percentage discount.']]
  },
  'percentage-calculator': {
    title:'Percentage Calculator', category:'Finance',
    description:'Calculate what percentage one number is of another and calculate percentage change between two values.',
    formula:'Percentage = part ÷ whole × 100',
    example:'25 is 20.83% of 120 using the basic percentage relationship.', live:true,
    fields:[['part','Part / value','', 'number',25],['whole','Whole / base','', 'number',120]],
    calc:v=>{if(v.whole===0)return{main:'Enter a non-zero whole',sub:'The percentage cannot be calculated with a zero denominator.'};const p=v.part/v.whole*100;return{main:p.toFixed(2)+'%',sub:v.part+' is '+p.toFixed(2)+'% of '+v.whole+'.'}},
    faqs:[['How do I calculate percentage change?','Percentage change uses (new − old) ÷ old × 100. This basic tool instead answers what percentage one value is of another.'],['Can the result exceed 100%?','Yes. If the part is larger than the whole, the percentage is greater than 100%.']]
  },
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