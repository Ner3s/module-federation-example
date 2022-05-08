module.exports = {
  name: 'mfe2',
  url: process.env.REMOTE_MFE2_URL,

  get remote() {
    return `${this.name}@${this.url}/remoteEntry.js`;
  },
};
