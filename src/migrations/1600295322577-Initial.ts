import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1600295322577 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Given Word, The (O Pagador de Promessas)', 'Nullam varius.', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 25, 'Ameline Autie', 'http://cdbaby.com/odio/consequat/varius.xml', 'http://google.co.jp/sociis/natoque.xml', 19, 'free', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Pajama Party', 'Donec semper sapien a libero.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 20, 'Nellie Curnucke', 'https://mozilla.com/rutrum/ac/lobortis/vel/dapibus/at/diam.js', 'https://shutterfly.com/quam/sapien.js', 4, '$$$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Not Forgotten', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 86, 'Horst Garrud', 'http://51.la/ante/vel/ipsum.xml', 'https://examiner.com/nulla/tempus/vivamus/in/felis/eu.png', 19, '$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Good Night to Die, A', 'Nunc rhoncus dui vel sem.', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 95, 'Angelique Tordoff', 'http://a8.net/quisque/arcu/libero/rutrum.json', 'http://globo.com/donec/vitae/nisi/nam/ultrices.js', 15, '$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Small Time', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 72, 'Noellyn Stivens', 'https://phpbb.com/platea/dictumst/aliquam.jpg', 'http://gizmodo.com/turpis/nec/euismod/scelerisque/quam.jsp', 19, '$$$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Raising Victor Vargas', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 38, 'Abram Edgler', 'http://yellowpages.com/enim/in/tempor.js', 'http://reddit.com/libero.jpg', 6, '$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Space Battleship Yamato', 'Nullam porttitor lacus at turpis.', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 39, 'Billye Swainger', 'http://theguardian.com/sagittis/nam.html', 'https://php.net/eget/rutrum/at/lorem.xml', 13, '$$$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Prata Palomares', 'Sed accumsan felis.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 94, 'Hershel Culy', 'http://accuweather.com/lectus.png', 'https://amazon.com/erat/volutpat/in.json', 6, '$', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Autumn Sonata (Höstsonaten)', 'Duis consequat dui nec nisi volutpat eleifend.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 72, 'Bryanty Emptage', 'https://usa.gov/id/justo.xml', 'http://wufoo.com/dictumst/aliquam/augue/quam.json', 18, '$$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Straw Dogs', 'Curabitur at ipsum ac tellus semper interdum.', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 31, 'Karel Blakes', 'http://multiply.com/blandit/nam/nulla.js', 'http://cdc.gov/scelerisque/mauris/sit/amet.js', 1, '$$$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Your Friends and Neighbors', 'Sed ante.', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 74, 'Adolphus Rodders', 'http://networkadvertising.org/odio/cras/mi.html', 'https://posterous.com/arcu/libero/rutrum.json', 8, '$$$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Bloodsuckers', 'Nulla ut erat id mauris vulputate elementum.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 32, 'Upton Pitway', 'http://wikimedia.org/eget/eros/elementum/pellentesque/quisque.html', 'https://bigcartel.com/molestie/nibh/in/lectus/pellentesque.jpg', 1, 'free', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Open Season 2', 'In blandit ultrices enim.', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 69, 'Kingsly Dilawey', 'http://mtv.com/eget/tempus/vel/pede/morbi/porttitor.js', 'http://yelp.com/integer/non.png', 16, '$$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Love''s Deadly Triangle: The Texas Cadet Murder', 'Praesent blandit.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 25, 'Armstrong Flisher', 'http://fda.gov/faucibus/orci/luctus/et/ultrices/posuere.png', 'http://microsoft.com/nulla/ac/enim/in.xml', 3, '$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Federal Hill', 'Duis bibendum.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 94, 'Harper Jancik', 'https://bravesites.com/at/lorem/integer/tincidunt/ante/vel.aspx', 'https://scientificamerican.com/at/lorem/integer/tincidunt.jpg', 5, '$$$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Mac and Me', 'Ut at dolor quis odio consequat varius.', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 80, 'Ernie Cossey', 'http://sogou.com/odio/donec/vitae/nisi/nam/ultrices/libero.html', 'https://so-net.ne.jp/vel/pede/morbi.png', 5, '$$', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Cloudland', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 46, 'Pepi Karlowicz', 'http://weebly.com/rutrum/nulla/tellus.png', 'http://blogs.com/ullamcorper.xml', 18, '$$$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Deep Water', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 95, 'Evie Whistlecraft', 'https://clickbank.net/dapibus.aspx', 'https://apache.org/at/ipsum/ac/tellus/semper/interdum/mauris.html', 16, '$', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Winners and Sinners (Qi mou miao ji: Wu fu xing)', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 70, 'Marlee Le Noire', 'https://yelp.com/hac/habitasse/platea/dictumst/aliquam.js', 'http://alexa.com/nulla/tellus.js', 10, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Coyote Ugly', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 88, 'Meg Wattingham', 'http://devhub.com/magna/vestibulum/aliquet/ultrices/erat/tortor/sollicitudin.jsp', 'https://sourceforge.net/dapibus/duis/at/velit.js', 9, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Down Argentine Way', 'Curabitur at ipsum ac tellus semper interdum.', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 69, 'Juliane Aveson', 'https://elpais.com/pede/justo.html', 'http://pbs.org/volutpat/erat/quisque.json', 13, 'free', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Tiger Brigades, The (Les brigades du Tigre)', 'Ut tellus.', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 98, 'Bogey Roston', 'http://ocn.ne.jp/ligula/suspendisse/ornare/consequat/lectus/in/est.js', 'https://mit.edu/vulputate/ut/ultrices/vel.png', 10, 'free', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Little Mermaid, The', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 56, 'Demeter O''Kieran', 'https://ft.com/pede/posuere.aspx', 'https://tmall.com/luctus/ultricies/eu/nibh/quisque/id.jpg', 7, '$$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Liberty', 'Quisque ut erat.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 88, 'Kerianne Purdy', 'http://furl.net/duis/ac.json', 'http://nba.com/vivamus/in/felis/eu/sapien.html', 16, '$$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Motel Hell', 'Nulla tempus.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 52, 'Zachery Reinhart', 'https://comcast.net/id/luctus.jsp', 'http://cnbc.com/elementum/pellentesque/quisque/porta/volutpat/erat.html', 4, '$$$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('This Woman Is Dangerous', 'Etiam faucibus cursus urna.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 93, 'Van Van Bruggen', 'https://free.fr/lacinia/nisi/venenatis/tristique/fusce.png', 'https://yahoo.co.jp/condimentum.json', 11, '$$$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Lucky 7', 'In eleifend quam a odio.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 25, 'Jessamine Anand', 'https://seattletimes.com/amet/nunc/viverra/dapibus/nulla/suscipit.xml', 'http://google.co.uk/faucibus/orci/luctus/et/ultrices.jpg', 14, '$$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Torment (Hets)', 'Proin interdum mauris non ligula pellentesque ultrices.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 99, 'Cherrita Lamburne', 'https://sun.com/a/odio.json', 'http://businessinsider.com/neque.html', 18, '$$$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('When Marnie Was There', 'In hac habitasse platea dictumst.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 51, 'Mirelle Mcasparan', 'https://yahoo.com/libero/quis/orci.jpg', 'https://constantcontact.com/orci/pede/venenatis/non/sodales.jpg', 5, '$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Goyokin', 'Morbi quis tortor id nulla ultrices aliquet.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 60, 'Sax Fashion', 'http://canalblog.com/enim/leo/rhoncus/sed.json', 'https://fema.gov/morbi/ut/odio/cras/mi.xml', 19, '$$', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Brasher Doubloon, The', 'Vestibulum rutrum rutrum neque.', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 52, 'Karna FitzGibbon', 'https://indiegogo.com/malesuada/in/imperdiet/et.jsp', 'https://constantcontact.com/libero.jsp', 5, '$$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Return', 'Donec dapibus.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 80, 'Reinwald Naris', 'http://php.net/lectus/pellentesque/eget/nunc.aspx', 'https://google.com.br/lacus/curabitur/at/ipsum/ac.png', 9, '$$', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Judgement Day', 'Integer a nibh.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 74, 'Ryann McTeague', 'http://vk.com/lectus.xml', 'https://usa.gov/eget/congue/eget.html', 20, 'free', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Stop Train 349', 'Mauris ullamcorper purus sit amet nulla.', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 35, 'Paloma Goudy', 'https://feedburner.com/cubilia/curae/mauris/viverra/diam.json', 'http://cdc.gov/primis/in/faucibus/orci.xml', 12, '$$$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('La Putain du roi', 'Morbi quis tortor id nulla ultrices aliquet.', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 91, 'Carlie De Avenell', 'http://chronoengine.com/pulvinar.xml', 'https://purevolume.com/sodales/scelerisque/mauris/sit/amet.aspx', 9, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Bent', 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 46, 'Konstance Treby', 'https://prweb.com/rutrum.jsp', 'https://microsoft.com/felis/sed/interdum/venenatis.json', 15, '$$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('One, Two, Three', 'Mauris ullamcorper purus sit amet nulla.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 84, 'Jeth Scholard', 'https://wordpress.com/amet/nulla.js', 'http://marketwatch.com/accumsan/felis/ut.jsp', 18, '$$$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Twin Town', 'Nullam varius.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 35, 'Biddy Turner', 'https://google.fr/pede/ac/diam/cras/pellentesque/volutpat/dui.jpg', 'https://clickbank.net/tristique/tortor/eu/pede.png', 1, '$$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Vengeance Valley', 'Duis ac nibh.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 93, 'Philis Razzell', 'http://ucla.edu/curae/nulla/dapibus/dolor/vel/est/donec.jpg', 'http://cyberchimps.com/eget/vulputate/ut/ultrices/vel/augue.aspx', 20, 'free', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Bitter Victory', 'Nulla justo.', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 49, 'Marcella Monro', 'http://noaa.gov/mauris/sit/amet.aspx', 'https://nytimes.com/nisi/eu/orci.aspx', 8, '$$$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Enemy of the People, An', 'Phasellus in felis.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 46, 'Svend Blayney', 'http://alexa.com/volutpat/dui/maecenas/tristique/est/et.xml', 'http://ycombinator.com/congue/elementum.png', 2, '$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Broken Vessels', 'In hac habitasse platea dictumst.', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 37, 'Godwin Deam', 'https://si.edu/tempus/semper/est/quam/pharetra/magna/ac.html', 'http://goodreads.com/nunc/vestibulum.jpg', 17, '$$$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Ghost Voyage', 'Mauris sit amet eros.', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 32, 'Ondrea Willans', 'https://howstuffworks.com/libero/nullam/sit.html', 'https://sfgate.com/aliquet/pulvinar.js', 18, 'free', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Woman in White, The', 'Nunc rhoncus dui vel sem.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 50, 'Carina Whelpton', 'http://bandcamp.com/ut/tellus/nulla/ut/erat/id/mauris.jpg', 'https://paypal.com/rutrum/at/lorem/integer/tincidunt/ante.png', 1, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Wild in the Streets', 'Vivamus in felis eu sapien cursus vestibulum.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 47, 'Gusta Buttler', 'https://salon.com/duis/bibendum/felis/sed/interdum.js', 'http://skyrock.com/ipsum/primis/in.png', 4, '$', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Winter Sleep (Kis Uykusu)', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 100, 'Collie Damrel', 'http://jiathis.com/nulla/facilisi/cras/non/velit/nec.js', 'https://topsy.com/ipsum/primis/in/faucibus/orci.jsp', 3, 'free', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Tree of Knowledge, The (Kundskabens træ)', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 93, 'Kassia Mildner', 'http://spotify.com/imperdiet/nullam/orci/pede/venenatis.xml', 'https://digg.com/turpis.jpg', 2, '$$$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Hidden Fortress, The (Kakushi-toride no san-akunin)', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 37, 'Salmon Hamm', 'https://wikia.com/metus/arcu/adipiscing/molestie.html', 'https://wisc.edu/elit/proin/interdum/mauris/non.jsp', 4, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Bridge Too Far, A', 'Vivamus vel nulla eget eros elementum pellentesque.', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 82, 'Phebe Heindl', 'https://geocities.com/consequat.xml', 'https://csmonitor.com/justo/nec/condimentum/neque.json', 3, '$$$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('The Emperor of California', 'Integer tincidunt ante vel ipsum.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 31, 'Charmaine Younghusband', 'http://simplemachines.org/ac/est.jpg', 'http://lycos.com/in/congue/etiam/justo/etiam/pretium/iaculis.jsp', 8, '$$$', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Of Time and the City', 'Vivamus tortor.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 45, 'Sharleen Way', 'https://slate.com/sapien/in/sapien/iaculis.js', 'https://theguardian.com/sollicitudin/vitae/consectetuer/eget/rutrum/at/lorem.js', 20, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Casa de mi Padre', 'Sed vel enim sit amet nunc viverra dapibus.', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
    
    Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 61, 'Noll Stepto', 'https://disqus.com/nam/congue.html', 'https://networksolutions.com/platea/dictumst/aliquam/augue/quam.png', 10, 'free', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Apple Dumpling Gang Rides Again, The', 'Morbi non lectus.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
    
    Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
    
    Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', 61, 'Malinde Mainds', 'http://so-net.ne.jp/a/pede/posuere.jpg', 'https://walmart.com/eu/magna.jsp', 2, '$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Ants in the Pants', 'Suspendisse potenti.', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 73, 'Robinson Dingate', 'https://nps.gov/libero/nam/dui/proin/leo.html', 'https://mayoclinic.com/et/commodo/vulputate/justo.png', 2, 'free', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Münchhausen', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 65, 'Gaby Helling', 'https://google.ru/sed/magna/at/nunc/commodo.html', 'https://printfriendly.com/orci.html', 19, '$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Straight Shooting', 'Nulla nisl.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 45, 'Gianna Butterfill', 'http://miitbeian.gov.cn/etiam/pretium/iaculis/justo/in/hac/habitasse.jsp', 'http://sina.com.cn/id/ligula/suspendisse/ornare/consequat/lectus.xml', 15, '$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Once Upon a Time in Queens', 'Proin interdum mauris non ligula pellentesque ultrices.', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 32, 'Bliss Heaviside', 'https://ca.gov/turpis/nec/euismod/scelerisque.jsp', 'https://google.com/sagittis.html', 11, 'free', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Paperboy, The', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 39, 'Corty Hillborne', 'https://craigslist.org/at.json', 'http://parallels.com/eu/massa/donec/dapibus/duis/at/velit.html', 7, '$$', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Secret Lives of Dentists, The', 'Duis ac nibh.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 65, 'Elliott Greatbanks', 'http://imgur.com/pede/justo/eu/massa.json', 'http://lycos.com/mattis.png', 5, '$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Day They Robbed the Bank of England, The', 'Nullam molestie nibh in lectus.', 'Fusce consequat. Nulla nisl. Nunc nisl.
    
    Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 47, 'Greg Pyser', 'http://europa.eu/vel/est/donec.json', 'http://jiathis.com/elit/ac/nulla/sed/vel.jsp', 8, 'free', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Revenge of the Ninja', 'Suspendisse potenti.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 20, 'Saleem Ducker', 'http://hubpages.com/parturient/montes/nascetur/ridiculus/mus.html', 'http://studiopress.com/donec/ut/dolor/morbi.xml', 10, '$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Insider, The', 'Aliquam non mauris.', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 91, 'Evelyn Gillhespy', 'http://tripod.com/non/mattis/pulvinar/nulla/pede/ullamcorper.jpg', 'https://dmoz.org/est.png', 10, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Edge of Fear (Ella y el miedo)', 'Sed accumsan felis.', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 96, 'Sheilakathryn Maffini', 'https://yolasite.com/morbi/non.aspx', 'https://msu.edu/ut.json', 7, '$$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Disgrace', 'Curabitur convallis.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 84, 'Brenna Harby', 'https://dedecms.com/ultrices/vel/augue/vestibulum.html', 'https://ebay.com/platea.jpg', 11, '$$$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Under Suspicion', 'Sed ante.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 72, 'Venus Yerill', 'http://sitemeter.com/justo/sit.jsp', 'https://gizmodo.com/quam/turpis/adipiscing.xml', 3, '$$$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Stan Helsing', 'Nulla tempus.', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 66, 'Alanson Gligorijevic', 'https://devhub.com/nullam/porttitor/lacus/at/turpis/donec/posuere.html', 'https://reuters.com/erat/volutpat/in/congue/etiam/justo.js', 8, '$$$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Holding, The', 'In congue.', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 64, 'Zacharias Christoforou', 'https://uol.com.br/nullam/molestie/nibh/in/lectus.jpg', 'http://pinterest.com/orci/luctus/et/ultrices/posuere.json', 14, '$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Floating', 'Donec semper sapien a libero.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
    
    In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', 33, 'Anthiathia Sellek', 'https://sourceforge.net/et/ultrices.json', 'http://sbwire.com/est/lacinia/nisi/venenatis/tristique.js', 15, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Eight Miles High (Das wilde Leben)', 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 74, 'Thomasa Dionisetto', 'http://springer.com/sit/amet.png', 'http://google.com/eleifend/luctus.aspx', 19, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Bad Girl', 'Duis at velit eu est congue elementum.', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 36, 'Luisa Plowes', 'http://xing.com/integer/non/velit/donec/diam/neque/vestibulum.jpg', 'http://taobao.com/lectus/in.aspx', 3, 'free', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Water Horse: Legend of the Deep, The', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 20, 'Yorgos Finnes', 'http://sina.com.cn/commodo/vulputate/justo/in/blandit/ultrices/enim.jpg', 'http://freewebs.com/tortor/sollicitudin/mi/sit/amet/lobortis/sapien.html', 9, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Super, The', 'Donec semper sapien a libero.', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 87, 'Kristin Vasyunkin', 'http://wisc.edu/adipiscing/elit/proin/risus/praesent/lectus/vestibulum.aspx', 'http://google.com.hk/id/consequat/in/consequat.xml', 8, '$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Phone (Pon)', 'Aenean fermentum.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 72, 'Corbett Heape', 'https://fotki.com/placerat/ante/nulla/justo/aliquam/quis/turpis.jsp', 'https://yellowpages.com/vel/sem/sed/sagittis/nam/congue.html', 1, '$$$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Derailed', 'Duis consequat dui nec nisi volutpat eleifend.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 36, 'Britteny Reay', 'http://shop-pro.jp/molestie/hendrerit/at.png', 'http://sina.com.cn/odio/elementum.html', 12, '$$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Unreasonable Man, An', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 92, 'Davida Siehard', 'http://rediff.com/in.xml', 'https://youtube.com/morbi/ut/odio/cras.xml', 8, '$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Crew, The', 'In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 27, 'Addy Saltsberger', 'https://earthlink.net/id/luctus/nec/molestie/sed/justo.js', 'http://about.me/sapien/cum/sociis.png', 18, '$$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Barren Lives (Vidas Secas)', 'Nunc purus.', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 73, 'Auberon Rosell', 'https://blogtalkradio.com/nulla/ut.html', 'http://mail.ru/turpis/integer/aliquet.xml', 2, '$$$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('White Cliffs of Dover, The', 'Fusce posuere felis sed lacus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 22, 'Deirdre Helm', 'https://yahoo.co.jp/rhoncus/aliquam/lacus/morbi/quis/tortor.jpg', 'http://networkadvertising.org/varius/ut.jsp', 20, 'free', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('American Kickboxer 2 (American Kickboxer 2: To the Death)', 'Curabitur at ipsum ac tellus semper interdum.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
    
    Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 46, 'Claribel Marder', 'https://livejournal.com/non.jpg', 'http://psu.edu/turpis/a/pede/posuere/nonummy/integer.jpg', 12, 'free', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('For Your Consideration', 'Suspendisse potenti.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
    
    Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 83, 'Petrina Beldum', 'https://deviantart.com/consectetuer/adipiscing/elit/proin/risus.jpg', 'http://plala.or.jp/sit/amet/consectetuer.jpg', 10, '$$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Dirty Bomb', 'Quisque porta volutpat erat.', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 37, 'Zared Tamburi', 'http://comcast.net/quam/fringilla/rhoncus.aspx', 'https://accuweather.com/turpis/enim.aspx', 18, '$', 'video', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Exit Smiling', 'In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 53, 'Cello Bowes', 'https://howstuffworks.com/dictumst/maecenas/ut/massa/quis/augue/luctus.jsp', 'http://elpais.com/sem/mauris/laoreet/ut/rhoncus/aliquet.jsp', 12, '$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Legend of Lobo, The', 'Proin interdum mauris non ligula pellentesque ultrices.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 71, 'Cullie Manns', 'https://altervista.org/ut/odio/cras/mi/pede.jsp', 'https://java.com/velit/vivamus/vel/nulla.aspx', 12, '$$$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Hatchet II', 'Proin risus.', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 100, 'Hobart Lergan', 'http://bloglovin.com/in/leo/maecenas.png', 'http://constantcontact.com/interdum.json', 19, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Legend of Leigh Bowery, The', 'Nulla suscipit ligula in lacus.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
    
    Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 49, 'Hannah Beardsdale', 'https://webnode.com/nisl/aenean.xml', 'http://naver.com/amet/sapien/dignissim/vestibulum/vestibulum/ante.json', 19, '$$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Welcome', 'Suspendisse potenti.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 97, 'Kathryne Delve', 'http://topsy.com/augue.html', 'http://arizona.edu/volutpat/sapien/arcu.png', 6, '$$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Luna, La', 'Morbi non lectus.', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 20, 'Arvy Sewill', 'http://ucoz.com/nulla/tempus/vivamus/in/felis/eu/sapien.json', 'http://seesaa.net/integer/non/velit/donec/diam/neque/vestibulum.jpg', 13, '$', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('She Wouldn''t Say Yes', 'Cras in purus eu magna vulputate luctus.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 30, 'Vallie Danat', 'http://accuweather.com/scelerisque/quam.xml', 'http://mayoclinic.com/potenti/in.png', 10, '$', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Charleston', 'Morbi porttitor lorem id ligula.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 60, 'Dorisa Craze', 'http://economist.com/elit/proin/risus/praesent/lectus/vestibulum/quam.png', 'http://apple.com/vestibulum/ante/ipsum/primis/in/faucibus.xml', 5, '$', 'article', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Watermarks', 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
    
    Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 40, 'Karry Innwood', 'http://disqus.com/ultrices/posuere.jsp', 'http://redcross.org/leo/odio/porttitor/id.png', 14, 'free', 'video', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Carpetbaggers, The', 'Pellentesque at nulla.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 62, 'Phillie Swanborough', 'https://technorati.com/suspendisse/ornare/consequat/lectus.xml', 'http://howstuffworks.com/amet/justo/morbi/ut.jsp', 11, 'free', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Our Daily Bread', 'Proin risus.', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 65, 'Cathi Farmiloe', 'https://technorati.com/praesent/blandit/nam.aspx', 'https://behance.net/felis/donec/semper.jpg', 2, 'free', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('F/X', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 89, 'Ally Jiri', 'http://latimes.com/morbi/ut/odio.png', 'http://google.com.au/eu/nibh/quisque/id/justo/sit/amet.png', 18, '$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('The Anomaly', 'Aliquam quis turpis eget elit sodales scelerisque.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
    
    Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 36, 'Minna Peperell', 'http://house.gov/adipiscing/elit.html', 'https://slideshare.net/luctus/tincidunt.aspx', 7, '$$$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Pebble and the Penguin, The', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
    
    Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
    
    Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 61, 'Barth Meenehan', 'https://typepad.com/ante/vestibulum/ante.html', 'http://engadget.com/pellentesque/volutpat.html', 18, '$$', 'video', 'advanced');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('On Guard (Bossu, Le)', 'Maecenas ut massa quis augue luctus tincidunt.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    
    Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 60, 'Geri Leverette', 'http://vkontakte.ru/aliquet.jsp', 'https://technorati.com/pellentesque/viverra/pede/ac/diam/cras.jsp', 1, 'free', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Brothers', 'Pellentesque eget nunc.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
    
    Fusce consequat. Nulla nisl. Nunc nisl.', 82, 'Prent Dunican', 'http://livejournal.com/nulla/eget/eros/elementum/pellentesque/quisque.jsp', 'https://google.nl/platea.png', 4, 'free', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('National Treasure: Book of Secrets', 'Nulla nisl.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 99, 'Emmalynn Wearne', 'https://psu.edu/elit/sodales/scelerisque/mauris/sit.jpg', 'https://cornell.edu/diam/vitae/quam/suspendisse/potenti.aspx', 5, 'free', 'article', 'beginner');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Quicksand', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', 72, 'Catharina Brayson', 'https://fastcompany.com/curabitur/at/ipsum/ac/tellus.jpg', 'https://salon.com/nec/dui/luctus/rutrum/nulla/tellus/in.png', 7, '$$$', 'article', 'intermediate');
    insert into resource (title, "smallDescription", description, length, author, "authorUrl", "externalUrl", "addedById", cost, type, level) values ('Letter to Momo, A (Momo e no tegami)', 'Integer a nibh.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 33, 'Cindy Megson', 'http://cbslocal.com/odio/cras/mi/pede/malesuada/in/imperdiet.js', 'https://topsy.com/mus.xml', 13, '$$$', 'video', 'advanced');
    
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
