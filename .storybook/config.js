import {configure} from '@storybook/react'

const req = require.context('../src', true, /.stories.js$/)

const loadStories = () => {
  require('./welcomeStory')
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)