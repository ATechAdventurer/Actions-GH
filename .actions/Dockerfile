FROM debian:9.5-slim

LABEL "com.github.actions.name"="TestAction"
LABEL "com.github.actions.description"="Write arguments to the standard output"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="green"

LABEL "repository"="http://github.com/ATechAdventurer/Actions-GH"
LABEL "homepage"="http://github.com/actions"
LABEL "maintainer"="ATechAdventurer"

COPY . .

# Install dependencies
RUN npm install

# This is what GitHub will run
ENTRYPOINT ["node", "/index.js"]
