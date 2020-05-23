![demoofqcom](https://unpkg.com/@qcom.io/qcom@1.0.36/qcom.png)
## API  

### Promise based HTTP client for the browser and Deno.

#### Getting Started

```ts
import api from 'https://deno.land/x/api/index.ts' // For Ts
// import api from 'https://deno.land/x/api/index.js' // For JS

console.log(await api.get('https://jsonplaceholder.typicode.com/todos/'))

console.log(await api.getone('https://jsonplaceholder.typicode.com/todos/',1))

console.log(await api.post('https://jsonplaceholder.typicode.com/todos/',{
    userId: 5,
    title: "excepturi a et neque qui expedita vel voluptate",
    completed: false
}))
console.log(await api.delete('https://jsonplaceholder.typicode.com/todos/1'))
console.log(await api.put('https://jsonplaceholder.typicode.com/todos/1',{
    userId: 1,
    title: "one",
    completed: true
}))

```

### Run
```
deno run -A file_name.ts
```

## Configuration


<details>
<summary>Use <code>api.get</code> : For Get Method. </summary>
<pre><code>
console.log(await api.get('https://jsonplaceholder.typicode.com/todos/'))
</code></pre>
</details>
<br>



<details>
<summary>Use <code>api.getone</code> : For GetOne Method. </summary>
<pre><code>
console.log(await api.getone('https://jsonplaceholder.typicode.com/todos/',1))
</code></pre>
</details>
<br>

<details>
<summary>Use <code>api.post</code> : For Post Method. </summary>
<pre><code>
console.log(await api.post('https://jsonplaceholder.typicode.com/todos/',{
    userId: 5,
    title: "excepturi a et neque qui expedita vel voluptate",
    completed: false
}))
</code></pre>
</details>
<br>

<details>
<summary>Use <code>api.delete</code> : For Delete Method. </summary>
<pre><code>
console.log(await api.delete('https://jsonplaceholder.typicode.com/todos/1'))

</code></pre>
</details>
<br>

<details>
<summary>Use <code>api.put</code> : For Put Method. </summary>
<pre><code>
console.log(await api.put('https://jsonplaceholder.typicode.com/todos/1',{
    userId: 1,
    title: "one",
    completed: true
}))
</code></pre>
</details>
<br>

## License

[MIT](LICENSE)