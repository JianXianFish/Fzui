<template>
    <div>
        <input type="text" :value="text" @input="handleInput">
    </div>
</template>

<script>
    export default {
        props: [
            'inputValue',
            'text'
        ],
        methods: {
            handleInput (e) {
                this.$emit("input", e.target.value)
            }
        }
    }
</script>

<style scoped lang="scss">
    div{
        font-size: 14px;
        box-shadow: 0 0 15px -1px red;
        display: flex;
    }
</style>
