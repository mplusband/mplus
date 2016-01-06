AV.Cloud.beforeSave('ACLTest', function(request, response) {
	var post = request.object;

	if (post) {
	    var acl = new AV.ACL();
	    acl.setReadAccess(request.user,true);
	    acl.setWriteAccess(request.user,true);
	    post.setACL(acl);
	    response.success();
	} else {
	    response.error('未发现有效的 Post 对象；');    
	}
})
