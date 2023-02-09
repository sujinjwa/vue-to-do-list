<template>
    <div class="page">
        <header>
            <h1>Vue Fire todo1</h1>
        </header>
        <main>
            <div class="todos">
                <transition name="fade">
                    <!-- 등록할 때의 input -->
                    <div class="write" v-if="writeState === 'add'" key="add">
                        <input type="text" v-model="addItemText" @keyup.enter="addItem" ref="writeArea" />
                        <button class="btn add" @click="addItem">Add</button>
                    </div>
                    <!-- 수정할 때의 input -->
                    <div class="write edit" v-else key="edit">
                        <input type="text" v-model="editItemText" @keyup.enter="editSave" ref="writeArea" />
                        <button class="btn add" @click="editSave">Save</button>
                    </div>
                </transition>
                <ul class="list" ref="list">
                    <li v-for="(item, index) in todos" :key="index">
                        <i 
                            @click="checkItem(index)"
                            :class="[item.state === 'yet' ? 'far' : 'fas', 'fa-check-square']">
                        </i>
                        <!-- <i :class="[checkSquare[item.state], 'fa-check-square']"></i> -->
                        <span>
                            {{ item.text }}
                            <b>
                                <a href="" @click.prevent="editShow(index)">Edit</a>
                                <a href="" @click.prevent="del(index)">Del</a>
                            </b>
                        </span>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
// import {db} from '../firebase/db';

export default {
    data() {
        return {
            todos:[
                {text: '공부하기', state: 'yet'},
                {text: '운동하기', state: 'done'},
                {text: '글쓰기', state: 'done'},
            ],
            addItemText: '',
            crrEditItem: '',
            editItemText: '',
            writeState: 'add',
            // checkSquare: {
            //     'yet': 'far',
            //     'done': 'fas',
            // },
        }
    },

    methods: {
        addItem() {
            if(this.addItemText.length === 0) return;
            this.todos.push({text: this.addItemText, state: 'yet'});
            this.addItemText = '';
        },
        
        checkItem(index) {
            if(this.todos[index].state === 'done') {
                this.todos[index].state = 'yet';
            } else {
                this.todos[index].state = 'done';
            }
        },

        editShow(index) {
            this.writeState = 'edit';
            // this.crrEditItem = this.todos[index].text;
            this.crrEditItem = index;
            this.editItemText = this.todos[this.crrEditItem].text;
            this.$refs.list.children[index].classList.add('editing');
        },

        editSave() {
            this.todos[this.crrEditItem].text = this.editItemText;
            this.writeState = 'add';
            this.$refs.list.children[this.crrEditItem].className = '';
        },

        del(index) {
            this.todos.splice(index, 1);
        }
    },

    mounted() {
        this.$refs.writeArea.focus();
    },

    // firestore: {
    //     todos: db.collection('todos')
    // }
}
</script>

<style>
</style>