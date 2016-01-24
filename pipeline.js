var i = middleware.length;  
while (i--) {  
  next = middleware[i].call(this, next);
}
