<template>
    <div>
        <Button @click="jumpPage('/test')">测试</Button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 1,
        };
    },
    methods: {
        jumpPage(path) {
            this.$router.push({ path, query: { id: 1 } });
        },
    },
};
</script>

<style scoped lang="less"></style>
