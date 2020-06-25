function Celeb (opts){
  this.opts = opts || {}
  this.name = this.opts.name || 'nonamed'
  this.age = this.opts.age || 0
  this.gender = this.opts.gender || 'M'
  this.thumb = this.opts.thumb || ''
}