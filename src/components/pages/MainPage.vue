<template>
  <WhatsOn>
    <DisplayColumn item="left-up">
      <h2>Today</h2>
      <VerticalTimeline>
        <TimeEvent classa="shac left" datea="9-00am" icona="fa-book-open">
          <h2>Shacharit</h2>
          <p>Hodu 8.00am.</p>
        </TimeEvent>
        <TimeEvent classa="maariv right" datea="7-00pm" icona="fa-book-open">
          <h2>Mincha & Maariv</h2>
        </TimeEvent>
      </VerticalTimeline>
    </DisplayColumn>
    <DisplayColumn item="left-down">
      <SpecialEvents></SpecialEvents>
    </DisplayColumn>
    <DisplayColumn item="right">
        <h2>Shabbat</h2>
        <VerticalTimeline>
        <TimeEvent classa="maariv left" datea="7-20pm" icona="fa-book-open">
          <h2>Mincha & Maariv</h2>
        </TimeEvent>
        <TimeEvent classa="candle right" datea="7-29pm-8-42pm" icona="fa-cake-candles">
          <h2>Candle Lighting</h2>
        </TimeEvent>
        <TimeEvent classa="shac left" datea="9-00am" icona="fa-book-open">
          <h2>Shacharit</h2>
          <p>Hodu 9.015am</p>
        </TimeEvent>
        <TimeEvent classa="banim right" datea="5-00pm-6-00pm" icona="fa-book-open-reader">
          <h2>Avot uBanim</h2>
        </TimeEvent>
        <TimeEvent classa="mincha left" datea="7-20pm" icona="fa-book-open">
          <h2>Mincha</h2>
        </TimeEvent>
        <TimeEvent classa="women right" datea="7-20pm" icona="fa-people-group">
          <h2>Women Nach Group</h2>
        </TimeEvent>
        <TimeEvent classa="medical left" datea="7-20pm" icona="fa-briefcase-medical">
          <h2>Medical Halacha & Ethics Shiur</h2>
          <p>by Dr Hibbert</p>
        </TimeEvent>
      </VerticalTimeline>
    </DisplayColumn>
  </WhatsOn>
</template>
  
<script>
  import WhatsOn from './../whatson/WhatsOn.vue';
  import SpecialEvents from './../whatson/SpecialEvents.vue';
  import DisplayColumn from './../whatson/DisplayColumn.vue';
  import VerticalTimeline from './../whatson/VerticalTimeline.vue'
  import TimeEvent from './../whatson/TimeEvent.vue';

  export default {
      components: {
        WhatsOn, SpecialEvents, DisplayColumn, TimeEvent, VerticalTimeline
      }
  };
</script>
