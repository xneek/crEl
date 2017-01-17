describe("crEl (create DOM elements helper)", () => {
    describe("Variants", () => {
        it("Without arguments", () => {
            assert.equal(crEl().outerHTML, '<div></div>');
        })
        it("1-st argument is attributes", () => {
            assert.equal(crEl({
                id: 'el1'
            }).outerHTML, '<div id="el1"></div>');
        })
        it("1-st argument is array", () => {
            assert.equal(crEl([crEl('li', 'one'), crEl('li', 'two'), crEl('li', 'three')]).outerHTML, '<div><li>one</li><li>two</li><li>three</li></div>');
        })
        it("1-st argument is DOM-node", () => {
            assert.equal(crEl(crEl('li', 'one'), crEl('li', 'two'), crEl('li', 'three')).outerHTML, '<div><li>one</li><li>two</li><li>three</li></div>');
        })
    })


    describe("Closed dom nodes", () => {
        let tags = 'a,b,div,textarea,p,sup,small,marquee,customtag';
        tags.split(',').forEach((t) => {
            it(`Return DOM-node (${t})`, () => {
                assert.equal(crEl(t).outerHTML, `<${t}></${t}>`);
            });
        })
    })
    describe("Not Closed dom nodes", () => {
        let tags = 'input,br,hr,link';
        tags.split(',').forEach((t) => {
            it("Return DOM-node (" + t + ")", () => {
                assert.equal(crEl(t).outerHTML, '<' + t + '>');
            });
        })
    })



    describe("Attributes", () => {
        it("Simple attribute div", () => {
            assert.equal(crEl('div', {
                id: 'elemId'
            }).outerHTML, '<div id="elemId"></div>');
        });
        it("Simple attribute input", () => {
            assert.equal(crEl('input', {
                type: 'text'
            }).outerHTML, '<input type="text">');
        });
        it("Empty attribute input", () => {
            assert.equal(crEl('input', {}).outerHTML, '<input>');
        });

        describe("Boolean attributes", () => {
            it("Input disabled=true", () => {
                assert.equal(crEl('input', {
                    disabled: true
                }).outerHTML, '<input disabled="">');
            });
            it("Input disabled=false", () => {
                assert.equal(crEl('input', {
                    disabled: false
                }).outerHTML, '<input>');
            });
        })

        describe("Class", () => {
            it("Set class as c:'list'", () => {
                assert.equal(crEl('div', {
                    c: 'list'
                }).outerHTML, '<div class="list"></div>');
            });
            it("Set class as class:'list'", () => {
                assert.equal(crEl('div', {
                    'class': 'list'
                }).outerHTML, '<div class="list"></div>');
            });
            it("Multy class as c:'list primary unsortes'", () => {
                assert.equal(crEl('div', {
                    'class': 'list primary unsortes'
                }).outerHTML, '<div class="list primary unsortes"></div>');
            });
            it("Multy class as c:'list primary unsortes' with spaces", () => {
                assert.equal(crEl('div', {
                    'class': ' list  primary   unsortes    '
                }).outerHTML, '<div class="list primary unsortes"></div>');
            });
            it("Empty class as c:''", () => {
                assert.equal(crEl('div', {
                    'class': ''
                }).outerHTML, '<div></div>');
            });
        })
        describe("Styles", () => {
            it("Set style as s:'color:red'", () => {
                assert.equal(crEl('div', {
                    s: 'color:red'
                }).outerHTML, '<div style="color: red;"></div>');
            });
            it("Set style as style:'color:red'", () => {
                assert.equal(crEl('div', {
                    style: 'color:red'
                }).outerHTML, '<div style="color: red;"></div>');
            });
            it("Set style as s:{color:'red'}", () => {
                assert.equal(crEl('div', {
                    s: {
                        color: 'red'
                    }
                }).outerHTML, '<div style="color: red;"></div>');
            });
        })
        describe("Data-attributes", () => {
            it("Set data-attributes as data-name:'Vasya'", () => {
                assert.equal(crEl('div', {
                    'data-name': 'Vasya'
                }).outerHTML, '<div data-name="Vasya"></div>');
            });
            it("Set data-attributes as d:{name:'Vasya')", () => {
                assert.equal(crEl('div', {
                    d: {
                        name: 'Vasya'
                    }
                }).outerHTML, '<div data-name="Vasya"></div>');
            });
            it("Set data-attributes as d:{selfName:'Vasya')", () => {
                assert.equal(crEl('div', {
                    d: {
                        selfName: 'Vasya'
                    }
                }).outerHTML, '<div data-self-name="Vasya"></div>');
            });
            it("Get data-attributes as dataset.selfName", () => {
                assert.equal(crEl('div', {
                    d: {
                        selfName: 'Vasya'
                    }
                }).dataset.selfName, 'Vasya');
            });
        })
        describe("Data-attributes", () => {
            it("Set data-attributes as data-name:'Vasya'", () => {
                assert.equal(crEl('div', {
                    'data-name': 'Vasya'
                }).outerHTML, '<div data-name="Vasya"></div>');
            });
            it("Set data-attributes as d:{name:'Vasya')", () => {
                assert.equal(crEl('div', {
                    d: {
                        name: 'Vasya'
                    }
                }).outerHTML, '<div data-name="Vasya"></div>');
            });
            it("Set data-attributes as d:{selfName:'Vasya')", () => {
                assert.equal(crEl('div', {
                    d: {
                        selfName: 'Vasya'
                    }
                }).outerHTML, '<div data-self-name="Vasya"></div>');
            });
            it("Get data-attributes as dataset.selfName", () => {
                assert.equal(crEl('div', {
                    d: {
                        selfName: 'Vasya'
                    }
                }).dataset.selfName, 'Vasya');
            });
        })
        describe("Events", () => {
            it("Set event as onclick", function(done) {
                let el = crEl('button', {
                    onclick: function() {
                        done()
                    }
                });
                el.click();
            });
            it("Set event as e:{click:...}", function(done) {
                let el = crEl('button', {
                    e: {
                        click: function() {
                            done()
                        }
                    }
                });
                el.click();
            });
            it("Set event as events:{click:...}", function(done) {
                let el = crEl('button', {
                    events: {
                        click: function() {
                            done()
                        }
                    }
                });
                el.click();
            });
            it("Set event as event:{click:...}", function(done) {
                let el = crEl('button', {
                    event: {
                        click: function() {
                            done()
                        }
                    }
                });
                el.click();
            });
        })
    })

    describe("Child nodes", () => {
        it("String as child", () => {
            assert.equal(crEl('p', 'Hello').outerHTML, '<p>Hello</p>');
        });
        it("Node as child", () => {
            assert.equal(crEl('p', crEl('strong', 'World')).outerHTML, '<p><strong>World</strong></p>');
        });

        it("More Strings as child", () => {
            assert.equal(crEl('p', 'Hello', ',', ' people!').outerHTML, '<p>Hello, people!</p>');
        });

        it("More Nodes as child", () => {
            assert.equal(crEl('ul', crEl('li', 'one'), crEl('li', 'two'), crEl('li', 'three')).outerHTML, '<ul><li>one</li><li>two</li><li>three</li></ul>');
        });
        it("Childs as array", () => {
            let lis = 'one,two,three'.split(',').map((a) => {
                return crEl('li', a);
            })
            assert.equal(crEl('ul', lis).outerHTML, '<ul><li>one</li><li>two</li><li>three</li></ul>');
        });
    })


});