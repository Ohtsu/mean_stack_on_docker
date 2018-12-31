db.createUser({
  user: "sample",
  pwd: "sample",
  roles: [{
    role: "readWrite",
    db: "blog"
  }]
})
