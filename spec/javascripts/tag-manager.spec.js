describe('TagManager',function(){

  it('has a list of tags',function(){
    let tm = TagManager();
    expect(tm.tags()).toEqual({});
  });

  it('has tag categories', function() {
    let tm = TagManager();
    tm.add('greetings', []);
    let expected = {
      greetings: []
    };
    expect(tm.tags()).toEqual(expected);
  });

  it('can add tags to any category', function() {
    let tm = TagManager();
    tm.add('greetings', ['hi']);
    let expected = {
      greetings: ['hi']
    };
    expect(tm.tags()).toEqual(expected);
  });

  it('can remove tags from any category', function() {
    let tm = TagManager();
    tm.add('greetings', ['hi']);
    tm.add('greetings', ['hello']);
    tm.remove('greetings', ['hello']);
    let expected = {
      greetings: ['hi']
    };
    expect(tm.tags()).toEqual(expected);
  });

  it('knows what tags it has', function() {
    let tm = TagManager({
      greetings: ['hi', 'hello'],
      names: ['jane', 'jim']
    });
    expect(tm.has('jane')).toBe(true);
  });

  it('knows what tags a category has', function() {
    let tm = TagManager({
      greetings: ['hi', 'hello'],
      names: ['jane', 'jim']
    });
    let category = tm.category('names')
    let janeExists = category.has('jane');
    let sueExists = category.has('sue');
    expect(janeExists).toBe(true);
    expect(sueExists).toBe(false);
  });

  it('can list a tag category', function() {
    let tm = TagManager({
      greetings: ['hi', 'hello']
    });
    let category = tm.category('greetings');
    expect(category.list()).toEqual(['hi', 'hello']);
  });

  it('can serialize all tags', function() {
    let tm = TagManager({
      topics: ['project management', 'ux/ui'],
      names: ['jane', 'jim']
    });
    let expected = '?topics=project%20management,ux/ui&names=jane,jim';
    expect(tm.serializeTags()).toEqual(expected);
  });
});