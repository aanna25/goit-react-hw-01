import style from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transactionTable}>
      <thead>
        <tr>
          <th className={style.tableHeader}>Type</th>
          <th className={style.tableHeader}>Amount</th>
          <th className={style.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={style.tableCell}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </td>
            <td className={style.tableCell}>{amount}</td>
            <td className={style.tableCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
