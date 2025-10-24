import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'sxacwtq0',
    dataset: 'production'
  },
  deployment: {
    appId: "n65b6dete9by6ochf0xjgmbh",
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
