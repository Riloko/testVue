<template>
  <div class="card__body-info-wrapper">
      <button 
        :class="['card__body-info-wrapper-btn', {'active' : index == activeTab}]" 
        v-for="(item, index) in items" 
        :key="index"
        v-on:click="onItemSelected(item, type), selectTab(index)"
      > 
        <div 
          v-if="type === 'color'" 
          :style="{background: item, height: '100%', width: '100%'}"
        ></div>
        <div v-else>{{item}}</div>
      </button>
  </div>
</template>

<script>
export default {
    name: 'PropSelector',
    props: {
        items: Array,
        type: String,
        onItemSelected: Function 
    },
    data: function () {
      let activeTab = null;
      return {
          activeTab
        }
    },
    methods: {
      selectTab: function (tabIndex) {
        this.activeTab = tabIndex;
      }
    }
}
</script>
