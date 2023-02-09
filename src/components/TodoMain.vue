<template>
    <div class="page">
        <header>
            <h1>Vue Fire todo1</h1>
        </header>
        <main>
            <div class="todos">
                <div class="write">
                    <input type="text" />
                    <button class="btn add">Add</button>
                </div>
                <ul v-for="item in todos" class="list">
                    <li>
                        <i :class="[checkSquare[item.state], 'fa-check-square']"></i>
                        <span>
                            {{ item.text }}
                            <b>
                                <a href="">Edit</a>
                                <a href="">Del</a>
                            </b>
                        </span>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos:[
                {text: '공부하기', state: 'yet'},
                {text: '운동하기', state: 'done'},
                {text: '글쓰기', state: 'done'},
            ],
            
            checkSquare: {
                'yet': 'far',
                'done': 'fas',
            },
        }
    }
}
</script>

<style>
</style>