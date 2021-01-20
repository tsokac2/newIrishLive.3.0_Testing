describe("Testing DOM Elements - Triggering .on('click') Event in trip.html, work.html and life.html", function(){

    it("Should invoke the jQuery click event when elements #showLinks1 and #hideLinks1 are clicked", function(){
        setFixtures('<button id="showLinks1" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks1').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card1").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks1" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks1").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card1").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks1', 'click');
        var spyEventHide = spyOnEvent('#hideLinks1', 'click');
        $('#showLinks1').trigger('click');
        $('#hideLinks1').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks2 and #hideLinks2 are clicked", function(){
        setFixtures('<button id="showLinks2" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks2').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card2").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks2" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks2").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card2").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks2', 'click');
        var spyEventHide = spyOnEvent('#hideLinks2', 'click');
        $('#showLinks2').trigger('click');
        $('#hideLinks2').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks3 and #hideLinks3 are clicked", function(){
        setFixtures('<button id="showLinks3" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks3').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card3").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks3" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks3").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card3").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks3', 'click');
        var spyEventHide = spyOnEvent('#hideLinks3', 'click');
        $('#showLinks3').trigger('click');
        $('#hideLinks3').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks4 and #hideLinks4 are clicked", function(){
        setFixtures('<button id="showLinks4" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks4').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card4").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks4" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks4").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card4").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks4', 'click');
        var spyEventHide = spyOnEvent('#hideLinks4', 'click');
        $('#showLinks4').trigger('click');
        $('#hideLinks4').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks5 and #hideLinks5 are clicked", function(){
        setFixtures('<button id="showLinks5" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks5').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card5").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks5" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks5").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card5").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks5', 'click');
        var spyEventHide = spyOnEvent('#hideLinks5', 'click');
        $('#showLinks5').trigger('click');
        $('#hideLinks5').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks6 and #hideLinks6 are clicked", function(){
        setFixtures('<button id="showLinks6" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks6').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card6").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks6" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks6").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card6").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks6', 'click');
        var spyEventHide = spyOnEvent('#hideLinks6', 'click');
        $('#showLinks6').trigger('click');
        $('#hideLinks6').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks7 and #hideLinks7 are clicked", function(){
        setFixtures('<button id="showLinks7" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks7').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card7").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks7" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks7").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card7").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks7', 'click');
        var spyEventHide = spyOnEvent('#hideLinks7', 'click');
        $('#showLinks7').trigger('click');
        $('#hideLinks7').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks8 and #hideLinks8 are clicked", function(){
        setFixtures('<button id="showLinks8" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks8').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card8").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks8" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks8").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card8").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks8', 'click');
        var spyEventHide = spyOnEvent('#hideLinks8', 'click');
        $('#showLinks8').trigger('click');
        $('#hideLinks8').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks9 and #hideLinks9 are clicked", function(){
        setFixtures('<button id="showLinks9" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks9').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card9").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks9" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks9").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card9").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks9', 'click');
        var spyEventHide = spyOnEvent('#hideLinks9', 'click');
        $('#showLinks9').trigger('click');
        $('#hideLinks9').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks10 and #hideLinks10 are clicked", function(){
        setFixtures('<button id="showLinks10" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks10').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card10").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks10" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks10").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card10").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks10', 'click');
        var spyEventHide = spyOnEvent('#hideLinks10', 'click');
        $('#showLinks10').trigger('click');
        $('#hideLinks10').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks11 and #hideLinks11 are clicked", function(){
        setFixtures('<button id="showLinks11" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks11').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card11").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks11" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks11").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card11").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks11', 'click');
        var spyEventHide = spyOnEvent('#hideLinks11', 'click');
        $('#showLinks11').trigger('click');
        $('#hideLinks11').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements #showLinks12 and #hideLinks12 are clicked", function(){
        setFixtures('<button id="showLinks12" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks12').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card12").addClass("wrap-rel");
        });

        setFixtures(' <button id="hideLinks12" class="hideLinks-btn"><i class="far fa-times-circle"></i></button>');
        $("#hideLinks12").on("click", function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).hide(400);
                $(".blur").fadeOut(300);
                $("#Card12").removeClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks12', 'click');
        var spyEventHide = spyOnEvent('#hideLinks12', 'click');
        $('#showLinks12').trigger('click');
        $('#hideLinks12').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
        expect(spyEventHide).toHaveBeenTriggered();
    });

    it("Should invoke the jQuery click event when elements .blur is clicked", function(){
        setFixtures('<div class="blur"></div>');
        $(".blur").on("click", function  () {
            $(".blur").fadeOut(300);
            $("#Card1").removeClass("wrap-rel");
            $(".hideLinks1-grid").hide(400);
         });
        var spyEventBlur = spyOnEvent('.blur', 'click');
        $('.blur').trigger('click');
        expect(spyEventBlur).toHaveBeenTriggered();
    });

});