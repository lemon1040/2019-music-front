<template>
  <div style="padding: 10px;">
    <div class="song-list">
      <li style="border-bottom: solid 1px rgba(101, 116, 130,0.3)">歌曲列表</li>
      <li
        v-for="(song,index) in this.$parent.musicList" :key="song.name"
        @mouseenter="highlight"
        @mouseleave="noHighlight"
        class="songInfo"
      >
        <span
          ref="songInfo"
          style="padding-top:1vh;padding-bottom:1vh;"
          @click="playOne(index)"
        >{{song.name}}</span>
        <img src="remove.png" width="15vw" height="15vw" @click="remove(index)">
      </li>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      flag: 0
    };
  },
  props: ["currentMusicIndex"],
  mounted() {
    if (this.$refs.songInfo != null)
      if (
        this.currentMusicIndex > -1 &&
        this.currentMusicIndex < this.$refs.songInfo.length
      )
        setTimeout(() => {
          this.$refs.songInfo[this.currentMusicIndex].classList.toggle(
            "playing"
          );
          this.$refs.songInfo[this.currentMusicIndex].innerHTML =
            '<marquee scrolldelay="300">' +
            this.$refs.songInfo[this.currentMusicIndex].innerHTML +
            "</marquee>";
        }, 100);
  },
  watch: {
    currentMusicIndex(newVal, oldVal) {
      setTimeout(() => {
        if (this.flag == 0) {
          if (oldVal < this.$parent.musicList.length && oldVal > -1&&this.$refs.songInfo[oldVal].classList.contains("playing")) {
            this.$refs.songInfo[oldVal].innerHTML = this.$parent.musicList[
              oldVal
            ].name;
            this.$refs.songInfo[oldVal].classList.toggle("playing");
          }
          if (newVal < this.$parent.musicList.length && newVal > -1) {
            this.musicGo(newVal)
          }
        } else this.flag = 0;
      });
    }
  },
  methods: {
    highlight(event) {
      event.target.className = "highlight";
      event.target.getElementsByTagName("img")[0].style.visibility = "visible";
    },
    noHighlight(event) {
      event.target.className = "songInfo";
      event.target.getElementsByTagName("img")[0].style.visibility = "hidden";
    },
    playOne(index) {
      this.$parent.changeMusic(index);
    },
    remove(index) {
      var tempArr;
      if (index + 1 < this.$parent.musicList.length)
        tempArr = this.$parent.musicList
          .slice(0, index)
          .concat(this.$parent.musicList.slice(index + 1));
      else tempArr = this.$parent.musicList.slice(0, index);
      this.$parent.musicList = tempArr;
    },
    musicGo(index) {
      setTimeout(() => {
        if (!this.$refs.songInfo[index].classList.contains("playing")) {
          this.$refs.songInfo[index].classList.toggle("playing");
          this.$refs.songInfo[index].innerHTML =
            '<marquee scrolldelay="300">' +
            this.$refs.songInfo[index].innerHTML +
            "</marquee>";
        }
      });
    }
  }
};
</script>
<style>
.song-list {
  color: rgba(190, 190, 190);
  font-size: 0.8vw;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", "sans-serif";
  vertical-align: center;
}
.song-list span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  height: 4vh;
  width: 6vw;
}
.song-list li {
  text-align: left;
  cursor: pointer;
  height: 4vh;
}
.song-list .songInfo {
  border-bottom: solid 1px rgba(101, 116, 130, 0.3);
}
.song-list img {
  visibility: hidden;
  position: relative;
  left: 6.2vw;
  bottom: 3.2vh;
  cursor: pointer;
}
.highlight {
  color: rgb(255, 255, 255);
  border-bottom: solid 1px rgba(255, 255, 255, 0.8);
}
.playing {
  color: #20a774;
  height: 4vh;
}
marquee {
  height: 2.125vh;
}
</style>
