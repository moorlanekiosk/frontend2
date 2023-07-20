<template>
<div class="timeline">
    <slot></slot>
</div>
</template>
    
<script>
export default {}
</script>
    
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
}

.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: #006E51;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.container {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    top: calc(50% - 1px);
    right: 8px;
    background: #006E51;
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: calc(50% - 8px);
    right: -8px;
    background: #ffffff;
    border: 2px solid #006E51;
    border-radius: 16px;
    z-index: 1;
  }
  &.left {
    left: 0;
    .date {
      left: calc(100% + 20px);
    }
  }
  &.right {
    left: 50%;
    .date {
        right: calc(100% + 20px);
    }
    &.right::before {
      left: 8px;
    }
    &::after {
      left: -8px;
    }
  }
  .date {
    position: absolute;
    display: inline-block;
    top: calc(50% - 8px);
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #006E51;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
    width: max-content;
  }
  .icon {
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 5px 5px;
    top: calc(50% - 20px);
    background: #F6D155;
    border: 2px solid #006E51;
    border-radius: 40px;
    text-align: center;
    font-size: 18px;
    color: #006E51;
    z-index: 1;
    > path {
      color: cornsilk;
    }
  }

}
.container {
  &.shac {
    > .content {
        background-color: #aadcff87;
    }
    svg.icon {
      background:#99dfe394;
      & > path {
        color: darkturquoise;
      }
    }    
  }
  &.mincha {
    > .content {
        background-color: #71e76fa1;
    }
    svg.icon {
      background:#b7ffc494;
      & > path {
        color: #75c24e;
      }
    }
  }
  &.maariv {
    > .content {
        background-color: #f6b655;
    }
    svg.icon {
      background: #d3555594;
      & > path {
        color: rgb(194, 78, 78);
      }
    }
  }
  &.medical {
    > .content {
        background-color: #f65555;
    }
    svg.icon {
      background: #fff;
      & > path {
        color: red;
      }
    }
  }
  
  &.candle {
    > .content {
        background-color: #fff700;
    }
    svg.icon {
      background: #999999;
      & > path {
        color:#fff700;
      }
    }
  }
  &.banim {
    > .content {
        background-color:#7cc0f9;
    }
    svg.icon {
      background: #0043a9;
      & > path {
        color:#7cc0f9;
      }
    }
  }
  
  &.women {
    > .content {
        background-color: #ffa6e0;
    }
    svg.icon {
      background: #ffcaef;
      & > path {
        color: rgb(255, 137, 196);
      }
    }
  }
}
.container.left .icon {
  right: 56px;
}

.container.right .icon {
  left: 56px;
}

.container .content {
  padding: 30px 90px 30px 30px;
  background: #F6D155;
  position: relative;
  border-radius: 0 500px 500px 0;
}

.container.right .content {
  padding: 30px 30px 30px 90px;
  border-radius: 500px 0 0 500px;
}

.container .content h2 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: normal;
  color: #006E51;
}

.container .content p {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}

@media (max-width: 767.98px) {
  .timeline::after {
    left: 90px;
  }

  .container {
    width: 100%;
    padding-left: 120px;
    padding-right: 30px;
  }

  .container.right {
    left: 0%;
  }

  .container.left::after, 
  .container.right::after {
    left: 82px;
  }

  .container.left::before,
  .container.right::before {
    left: 100px;
    border-color: transparent #006E51 transparent transparent;
  }

  .container.left .date,
  .container.right .date {
    right: auto;
    left: 15px;
  }

  .container.left .icon,
  .container.right .icon {
    right: auto;
    left: 146px;
  }

  .container.left .content,
  .container.right .content {
    padding: 30px 30px 30px 90px;
    border-radius: 500px 0 0 500px;
  }
}
</style>
    