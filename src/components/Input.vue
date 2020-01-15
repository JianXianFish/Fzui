<template>
    <div>
        <input type="text" v-model="inputValue">
    </div>
</template>

<script>
    export default {
        // props 可以是数组也可以是对象 Array<String> || Object
        // 而对象他就有四个属性。
        /**
         * type： 决定他的数据类型。 String ， Number等
         * default：决定他的默认值
         * required：false|true 决定他是否必填
         * validator：验证方法。
         * */
        //而我们这里需要用到双向绑定的效果。v-model。
        //因为刚好这里是input标签，你可以在input标签加入@input输入事件，进行绑定。
        //但是在有些组件中，你改变的值不会有@input事件。
        //所以一般我处理是用监听。如下
        props: [
            'value'
        ],
        data(){
            return{
                inputValue:this.value,
            }
        },
        watch:{
            inputValue(val){
                this.$emit("input", val)
            },
            value(val){
                this.inputValue = val;
            },
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
