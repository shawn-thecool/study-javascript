function EventMap() {
  this.pool = new Map();
}

EventMap.prototype.set = function(id, hndr, data) {
  if (this.pool.has(id)) return console.log("duplicate event id");
  this.pool.set(id, { hndr, data });
};

EventMap.prototype.get = function(id) {
  if (!this.pool.has(id)) return console.log("not found event");
  return this.pool.get(id);
};

EventMap.prototype.fire = function(id, next = d => d) {
  const evt = this.get(id);
  try {
    evt.hndr(evt.data, next);
  } catch (e) {
    console.log("err", e);
  }
};

const em = new EventMap();

const id = "event::test";
const data = { name: "shawn" };
const fn = (data, cb) => {
  setTimeout(() => {
    cb({ ...data, test: 1 });
  }, 3000);
};

em.set(id, fn, data);
em.fire(id);
