const toDo1Endpoint = 'https://jsonplaceholder.typicode.com/todos/1';
test();
async function test(params) {
    const response = await fetch(toDo1Endpoint);
    const json = await response.json();
    console.log(JSON.stringify(json));  
}

// fetch(toDo1Endpoint)
//     .then(getResponse)
//     .then(validateTodo1Response);

// function getResponse(response) {
//     return response.json();
// }

// function validateTodo1Response(todo1) {
//     console.log(todo1);
//     if(todo1.completed) {
//         console.log('Task completed!');
//     } else {
//         console.log( 'Task is in-progress!');
//     }
// }

