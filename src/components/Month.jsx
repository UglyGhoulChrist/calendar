function Month({ arrResult }) {
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
          <th scope="col" title="Понедельник">
            Пн
          </th>
          <th scope="col" title="Вторник">
            Вт
          </th>
          <th scope="col" title="Среда">
            Ср
          </th>
          <th scope="col" title="Четверг">
            Чт
          </th>
          <th scope="col" title="Пятница">
            Пт
          </th>
          <th scope="col" title="Суббота">
            Сб
          </th>
          <th scope="col" title="Воскресенье">
            Вс
          </th>
        </tr>
      </thead>
      <tbody>
        {arrResult.map((arr, index) => (
          <tr key={index}>
            {arr.map((el, index) => (
              <td
                key={index}
                className={
                  (el.month !== "this" && "ui-datepicker-other-month") ||
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
