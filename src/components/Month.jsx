function Month({ arrNumbersArr, nameDaysWeek }) {
  return (
    <table className="ui-datepicker-calendar">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
        <col className="ui-datepicker-week-end" />
        <col className="ui-datepicker-week-end" />
      </colgroup>
      <thead>
        <tr>
          {nameDaysWeek.map((el) => (
            <th key={el[1]} scope="col" title={el[1]}>
              {el[0]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {arrNumbersArr.map((arr, index) => (
          <tr key={index}>
            {arr.map((el, index) => (
              <td
                key={index}
                className={
                  (!el.nowMonth && "ui-datepicker-other-month") ||
                  (el.now && "ui-datepicker-today") ||
                  ""
                }
              >
                {el.number}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Month;
