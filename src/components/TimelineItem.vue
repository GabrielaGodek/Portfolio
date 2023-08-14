<script>
export default {
  props: {
        currentDate: String,
        firstHeader: String,
        firstDesc: String,
        firAddText: String,

        secondDesc: String,
        secondHeader: String,
        secondDate: String,
        firstCompany: String,
        secondCompany: String,
        secAddText: String,
    }
};
</script>

<template>
     <div class="timeline">
        <span class="line"></span>
        <p class="date">{{ currentDate }}</p>
        <span class="event"></span>
        <div class="details">
            <p class="title">{{ firstHeader }}</p>
            <p class="additional" v-show="firAddText">{{ firAddText }}</p>
            <p class="company" >{{ firstCompany }}</p>
        </div>
        
        <p class="date">{{ secondDate }}</p>
        <span class="event"></span>
        <div class="details">
            <p class="title">{{ secondHeader }}</p>
            <p class="additional" v-show="secAddText">{{ secAddText }}</p>
            <p class="company">{{ secondCompany }}</p>
        </div>
    </div>
</template>