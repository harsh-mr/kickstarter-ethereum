import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1F09927f7E2889C23DEFc16f4EBF7B4699cF7E77"
);

export default instance;
