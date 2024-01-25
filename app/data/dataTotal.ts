import { income, cart, refund, order, greenTrend, downTrend, greenChart, redChart } from "../assets"


 export const totals = [
  {
    totalName: 'Total Order',
    icon: order,
    digit: 350,
    trend: greenTrend,
    chart: greenChart

  },
  {
    totalName: 'Total Refund',
    icon: refund,
    digit: 270,
    trend: downTrend,
    chart: redChart

  },
  {
    totalName: 'Average Sales',
    icon: cart,
    digit: 1567,
    trend: downTrend,
    chart: redChart

  },
  {
    totalName: 'Total Income',
    icon: income,
    digit: 250,
    trend: greenTrend,
    chart: greenChart

  }
]