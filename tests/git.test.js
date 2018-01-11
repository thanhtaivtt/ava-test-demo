import test from 'ava'
import git from '../src/modules/git.js'

/**
 * Test git api
 * 
 */
test('test api',async t => {
    git.user = 'thanhtaivtt'
    await git.getUser().then(res => {
        //check result data
        t.is(res.data.name, "Vu Thanh Tai");
        //tets count property in object result
        t.is(Object.keys(res.data).length, 30);
    });
});