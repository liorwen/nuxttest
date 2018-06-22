<template lang="pug">
  .VueToNuxtLogo
    .Triangle.Triangle--two
    .Triangle.Triangle--one
    .Triangle.Triangle--three
    .Triangle.Triangle--four
</template>

<style lang="scss" scoped>
@mixin Triangle--anim($bleft,$bright,$bdown,$bdwonColor,$top:null,$left:null, $anim:null, $duration:0.5s, $linerDuration:3s){
  @if ($top) {top:$top};
  @if ($left) {left: $left};
  @if ($anim) {animation: $anim $duration linear forwards $linerDuration};
  border-left: $bleft solid transparent;
  border-right: $bright solid transparent;
  border-bottom: $bdown solid $bdwonColor;

}
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  @include Triangle--anim(105px, 105px, 180px, #41B883);
}

.Triangle--two {
  @include Triangle--anim(87.5px, 87.5px, 150px, #3B8070, 30px, 35px, goright, 0.5s , 3.5s);
}

.Triangle--three {
  @include Triangle--anim(70px, 70px, 120px, #35495E, 60px, 35px, goright, 0.5s , 3.5s);
}

.Triangle--four {
  @include Triangle--anim(35px, 35px, 60px, #fff, 120px, 70px, godown, 0.5s , 3s);
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
