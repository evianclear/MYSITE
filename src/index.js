let getTodosFromJSONPlaceholder = async () => {
try {
    console.log("Начало запроса")

    let response = await fetch('https://jsonplaceholder.typicode.com/todos/10')

    if (!response.ok) console.log("Ошибка")

let data = await response.json()
console.log("Наши данные:", data)

} catch (Error) {
    console.log("Возникла ошибка при запросе:", error)
} finally {
    console.log("Запрос завершился")
    }
}
getTodosFromJSONPlaceholder() 







     // let result = fetch('https://jsonplaceholder.typicode.com/users')
      //  .then(response => (response.json()))
       //.then(data => console.log(data.id))


       //fetch('https://jsonplaceholder.typicode.com/users/1', {
        //method: 'DELETE',
        //body: JSON.stringify({
          //title: 'Мой пост',
          //name: "Адольф",
          //body: 'О работа',
        //}),
       // headers: {
         // '//Content-type': 'application/json; charset=UTF-8',
     //   },
    //  })
      //  .then((response) => response.json())
      //  .then((json) => console.log("Пользователь был успешно удален"))
     //   .catch((error) => console.log("Ошибка запроса", error))


