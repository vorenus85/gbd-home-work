<template>
    <div class="name-badge" :style="{ backgroundColor: randomBackground}">{{ nameAbbreviation }}</div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    computed: {
        nameAbbreviation(){
            if(!this.name.length){
                return 
            }
            const abbreviation = this.name.split(" ");
            if(abbreviation.length < 1){
                return
            }
            const firstName = abbreviation[0];
            const lastName = abbreviation[1];
            return firstName.split("")[0] + lastName.split("")[0]
        },
        randomBackground(){
            const palette = ["#31F1AC", "#1C40A3", "#DE40A3"];
            return palette[Math.floor(Math.random()*palette.length)];
        }
    },

}
</script>
<style lang="scss">
.name-badge {
    background-color: #31F1AC;
    width: 3.625rem;
    height: 3.625rem;
    font-weight: 400!important;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.563rem;
    text-transform: uppercase;
    color: #fff;
}
</style>