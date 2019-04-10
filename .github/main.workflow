workflow "New workflow" {
  on = "issues"
  resolves = ["TestAction"]
}

action "TestAction" {
  uses = "./.actions"
}
