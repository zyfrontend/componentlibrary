<template>
  <div id="app">
    <div class="row">
      <zy-button>default</zy-button>
      <zy-button type="primary">primary</zy-button>
      <zy-button type="success">success</zy-button>
      <zy-button type="danger">danger</zy-button>
      <zy-button type="info">info</zy-button>
      <zy-button type="warning">warning</zy-button>
    </div>
    <div class="row">
      <zy-button plain>default</zy-button>
      <zy-button plain type="primary">primary</zy-button>
      <zy-button plain type="success">success</zy-button>
      <zy-button plain type="danger">danger</zy-button>
      <zy-button plain type="info">info</zy-button>
      <zy-button plain type="warning">warning</zy-button>
    </div>
    <zy-button>
      <i class="ri-admin-line"></i>
    </zy-button>
    <zy-button type="danger">
      <i class="rotate ri-loader-2-fill"></i>
    </zy-button>
    <div class="row">
      <zy-button type="text">111</zy-button>
      <zy-button type="text" disabled>111</zy-button>
    </div>
    <div class="row">
      <zy-button round>default</zy-button>
      <zy-button round type="primary">primary</zy-button>
      <zy-button round type="success">success</zy-button>
      <zy-button round type="danger">danger</zy-button>
      <zy-button round type="info">info</zy-button>
      <zy-button round type="warning">warning</zy-button>
    </div>
    <div class="row">
      <zy-button circle>
        <i class="rotate ri-loader-2-fill"></i>
      </zy-button>
      <zy-button circle type="primary">
        <i class="rotate ri-loader-2-fill"></i>
      </zy-button>
      <zy-button circle type="success">
        <i class="rotate ri-loader-2-fill"></i>
      </zy-button>
      <zy-button circle type="danger">
        <i class="rotate ri-loader-2-fill"></i>
      </zy-button>
      <zy-button circle type="info" @click="testBtnClick">
        <i class="rotate ri-loader-2-fill"></i>
      </zy-button>
      <zy-button circle type="warning" @click="console.log('111')">
        <i class="rotate ri-loader-2-fill"></i>
      </zy-button>
    </div>
    <div class="row">
      <zy-button disabled>default</zy-button>
      <zy-button disabled type="primary">primary</zy-button>
      <zy-button disabled type="success">success</zy-button>
      <zy-button disabled type="danger">danger</zy-button>
      <zy-button disabled type="info">info</zy-button>
      <zy-button disabled type="warning">warning</zy-button>
    </div>
    <div class="row">
      <zy-button loading>loading</zy-button>
      <zy-button loading type="primary">loading</zy-button>
      <zy-button loading type="success">loading</zy-button>
      <zy-button loading type="danger">loading</zy-button>
      <zy-button loading type="info">loading</zy-button>
      <zy-button loading type="warning">loading</zy-button>
    </div>
    <div class="row">
      <zy-button icon="ri-settings-4-line">loading</zy-button>
      <zy-button icon="ri-user-settings-line" type="primary">loading</zy-button>
      <zy-button icon="ri-home-smile-line" type="success">loading</zy-button>
      <zy-button icon="ri-chat-new-line" type="danger">loading</zy-button>
      <zy-button icon="ri-tv-line" type="info">loading</zy-button>
      <zy-button icon="ri-price-tag-3-fill" type="warning">loading</zy-button>
    </div>
    <div class="row">
      <zy-icon name="ri-send-plane-line"></zy-icon>
      <zy-icon name="ri-send-plane-line"></zy-icon>
      <zy-icon name="ri-send-plane-line"></zy-icon>
      <zy-icon name="ri-send-plane-line"></zy-icon>
      <zy-icon name="ri-send-plane-line"></zy-icon>
      <zy-icon name="ri-send-plane-line"></zy-icon>
      <zy-icon name="ri-send-plane-line"></zy-icon>
    </div>
    <div class="row">
      <zy-button-group>
        <zy-button>default</zy-button>
        <zy-button>default</zy-button>
        <zy-button>default</zy-button>
      </zy-button-group>
    </div>
    <zy-row>
      <zy-col :span="24"
        ><div class="grid-content bg-purple-dark"></div
      ></zy-col>
    </zy-row>
    <zy-row>
      <zy-col :span="12"><div class="grid-content bg-purple"></div></zy-col>
      <zy-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></zy-col>
    </zy-row>
    <zy-row>
      <zy-col :span="8"><div class="grid-content bg-purple"></div></zy-col>
      <zy-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></zy-col>
      <zy-col :span="8"><div class="grid-content bg-purple"></div></zy-col>
    </zy-row>
    <zy-row>
      <zy-col :span="6"><div class="grid-content bg-purple"></div></zy-col>
      <zy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></zy-col>
      <zy-col :span="6"><div class="grid-content bg-purple"></div></zy-col>
      <zy-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></zy-col>
    </zy-row>
    <zy-row>
      <zy-col :span="4"><div class="grid-content bg-purple"></div></zy-col>
      <zy-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></zy-col>
      <zy-col :span="4"><div class="grid-content bg-purple"></div></zy-col>
      <zy-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></zy-col>
      <zy-col :span="4"><div class="grid-content bg-purple"></div></zy-col>
      <zy-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></zy-col>
    </zy-row>
    <div class="row">
      <zy-button @click="open">打开消息提示</zy-button>
    </div>
    <div class="row">
      <zy-link>默认链接</zy-link>
      <zy-link type="primary">主要链接</zy-link>
      <zy-link type="success">成功链接</zy-link>
      <zy-link type="warning">警告链接</zy-link>
      <zy-link type="danger">危险链接</zy-link>
      <zy-link type="info">信息链接</zy-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    testBtnClick() {
      console.log("```");
    },
    open() {
      this.$message({
        message: "这是一条提示信息",
        type: "warning",
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  padding: 10px;
  .row {
    margin: 10px 0;
  }
}
.tet {
  background-color: #606266;
}

  .zy-row {
    margin-bottom: 20px;
  }
  .zy-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
