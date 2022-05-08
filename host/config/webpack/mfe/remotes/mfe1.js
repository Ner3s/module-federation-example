module.exports = {
  name: 'mfe1',
  url: process.env.REMOTE_MFE1_URL,

  get remote() {
    return `${this.name}@${this.url}/remoteEntry.js`;
  },
};
