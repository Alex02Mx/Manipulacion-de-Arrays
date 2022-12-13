const calendars = {

    primaryCalendar: [
        {
          startDate: new Date(2021, 1, 1, 10),
          endDate: new Date(2021, 1, 1, 11),
          title: "Cita de trabajo",
        },
        {
          startDate: new Date(2021, 1, 1, 15),
          endDate: new Date(2021, 1, 1, 15, 30),
          title: "Cita con mi jefe",
        }
    ],

    secondaryCalendar: [
        {
          startDate: new Date(2021, 1, 1, 10),
          endDate: new Date(2021, 1, 1, 11),
          title: "Cita de trabajo",
        },
        {
          startDate: new Date(2021, 1, 1, 15),
          endDate: new Date(2021, 1, 1, 15, 30),
          title: "Cita con mi jefe",
        }
    ]

} ;


const start = Object.values(calendars).flat().map(start => start.startDate)
console.log(start);
