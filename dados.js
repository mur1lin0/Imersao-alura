let dados = [
    {
        title : "Vaca",
        description : "Um animal dócil que fornece carne e couro. É comum em pastagens e pode ser criada usando trigo.",
        img : "https://minecraft.wiki/images/thumb/Minicow.png/300px-Minicow.png?b8658"
    },
    {
        title: "Porco",
        description: "Outro animal de fazenda, o porco oferece carne e pode ser criado usando batatas ou cenouras.",
        img: "https://minecraft.wiki/images/thumb/Minipig.png/120px-Minipig.png?5b0e3"
    },
    {
        title: "Galinha",
        description: "Uma fonte de carne, penas e ovos, a galinha é encontrada em áreas gramadas.",
        img: "https://minecraft.wiki/images/thumb/Minichicken.png/300px-Minichicken.png?af9ef"
    },
    {
        title: "Cavalo",
        description: "Um meio de transporte rápido e versátil. Pode ser domado com uma sela.",
        img: "https://minecraft.wiki/images/thumb/HorseBreeds.png/300px-HorseBreeds.png?7bc7d"
    },
    {
        title: "Burro",
        description: "Similar ao cavalo, mas mais lento e forte. Pode carregar baús.",
        img: "https://minecraft.wiki/images/thumb/DonkeyAndMule.png/800px-DonkeyAndMule.png?08bd0&20210504075203"
    },
    {
        title: "Mula",
        description: "Um cruzamento entre cavalo e burro, combinando as melhores características de ambos.",
        img: "https://minecraft.wiki/images/thumb/DonkeyAndMule.png/800px-DonkeyAndMule.png?08bd0&20210504075203"
    },
    {
        title: "Lhama",
        description: "Uma criatura pacífica que pode ser usada para transportar itens e cuspir em jogadores que a provocam.",
        img: "https://minecraft.wiki/images/All_llama_colors.png?aed8d"
    },
    {
        title: "Panda",
        description: "Um animal adorável e raro, encontrado em florestas de bambu.",
        img: "https://minecraft.wiki/images/thumb/PandaVariants.png/300px-PandaVariants.png?0cbf0"
    },
    {
        title: "Coelho",
        description: "Pequeno e ágil, o coelho pode ser encontrado em diversos biomas.",
        img: "https://minecraft.wiki/images/thumb/Six_Rabbit_Types.png/300px-Six_Rabbit_Types.png?d1e39"
    },
    {
        title: "Raposa",
        description: "Um animal esperto e cauteloso, que caça outros animais pequenos.",
        img: "https://minecraft.wiki/images/Foxes_lying_down_on_the_ground_together.jpg?7caa0"
    },
    {
        title: "Gato",
        description: "Um companheiro leal que afugenta creepers. Pode ser domesticado com peixe cru.",
        img: "https://minecraft.wiki/images/thumb/Eleven_cat_variants.png/400px-Eleven_cat_variants.png?08b78"
    },
    {
        title: "Peixes Tropicais",
        description: "Encontrado em oceanos, pode ser capturado e colocado em aquários.",
        img: "https://minecraft.wiki/images/thumb/Wild_Tropical_Fish_Variants.png/300px-Wild_Tropical_Fish_Variants.png?3ca53"
    },
    {
        title: "Axolotl",
        description: "Uma salamandra aquática rara, encontrada em cavernas inundadas.",
        img: "https://minecraft.wiki/images/Axolotl_color_variants.png?6ab67"
    },
    {
        title: "Abelha",
        description: "Produz mel e pode ser criada em colmeias.",
        img: "https://minecraft.wiki/images/thumb/Invisible_stingers.png/300px-Invisible_stingers.png?908f2"
    },
    {
        title: "Lula",
        description: "Uma criatura marinha que solta tinta quando atacada.",
        img: "https://minecraft.wiki/images/Flyingsquidbug.png?600f4"
    },
    {
        title: "Bacalhau",
        description: "Um peixe comum encontrado em oceanos.",
        img: "https://minecraft.wiki/images/thumb/Cod.gif/150px-Cod.gif?fe8d7"
    },
    {
        title: "Salmão",
        description: "Um peixe que pode ser encontrado em rios e oceanos.",
        img: "https://minecraft.wiki/images/thumb/Salmon.gif/150px-Salmon.gif?cb24f"
    },
    {
        title: "Baiacu",
        description: "Um peixe venenoso que infla quando ameaçado.",
        img: "https://minecraft.wiki/images/Pufferfish_mob.png?20893"
    },
    {
        title: "Tartaruga",
        description: "Uma criatura lenta e pacífica.",
        img: "https://minecraft.wiki/images/thumb/A_Turtle_Digging_Sand.png/300px-A_Turtle_Digging_Sand.png?958ba"
    },
    {
        title: "Slime",
        description: "Criaturas gelatinosas encontradas em pântanos.",
        img: "https://minecraft.wiki/images/Size10Slime.png?585c9"
    },

    {
        title: "Magma Cube",
        description: "Uma versão do slime encontrada no Nether.",
        img: "https://minecraft.wiki/images/Magma_Cube_Size.png?5269b"
    },
    {
        title: "Morcego",
        description: "Morcegos voam em cavernas e não atacam jogadores.",
        img: "https://minecraft.wiki/images/thumb/Makena_peeks_at_bats.png/1920px-Makena_peeks_at_bats.png?62945"
    },
    {
        title: "Golem de Ferro",
        description: "Criado pelos aldeões para proteção.",
        img: "https://minecraft.wiki/images/thumb/Iron_Golem_Looking_Down.png/300px-Iron_Golem_Looking_Down.png?7c1ec"
    },
    {
        title: "Golem da Neve",
        description: "Criado com neve e abóbora.",
        img: "https://minecraft.wiki/images/thumb/SnowGolemBehavior.png/300px-SnowGolemBehavior.png?6b445"
    },
    {
        title: "Aldeão",
        description: "Habitantes das aldeias, trocam itens com o jogador.",
        img: "https://minecraft.wiki/images/thumb/All_Professions_In_18w50a.png/300px-All_Professions_In_18w50a.png?d7712"
    },
    {
        title: "Lobo",
        description: "Pode ser domesticado com ossos. Quando domesticado, ataca outros mobs.",
        img: "https://minecraft.wiki/images/thumb/Lots_of_tamed_wolves.png/200px-Lots_of_tamed_wolves.png?d18b9"
    },
    {
        title: "Jaguatirica",
        description: "Um felino selvagem, ágil e perigoso.", 
        img: "https://minecraft.wiki/images/thumb/Ocelot1.png/300px-Ocelot1.png?ec2c9" 
    },

    {
        title: "Creeper",
        description: "Explode ao se aproximar do jogador.",
        img: "https://minecraft.wiki/images/thumb/Creeper_Danger.png/300px-Creeper_Danger.png?d848b"
    },

    {
        title: "Zumbi",
        description: "Uma criatura hostil que ataca o jogador à vista.",
        img: "https://minecraft.wiki/images/thumb/Zombie.png/150px-Zombie.png"
    },
    {
        title: "Esqueleto",
        description: "Ataca o jogador com arco e flecha.",
        img: "https://minecraft.wiki/images/thumb/Skeleton.png/150px-Skeleton.png"
    },
    {
        title: "Aranha",
        description: "Ataca o jogador com veneno.",
        img: "https://minecraft.wiki/images/thumb/Spider.png/150px-Spider.png"
    },
    {
        title: "Enderman",
        description: "Teleporta-se e ataca se for olhado nos olhos.",
        img: "https://minecraft.wiki/images/thumb/Enderman.png/150px-Enderman.png"
    },
    {
        title: "Aranha da Caverna",
        description: "Uma versão mais venenosa da aranha, encontrada em cavernas.",
        img: "https://minecraft.wiki/images/thumb/Cave_Spider.png/150px-Cave_Spider.png"
    },
    {
        title: "Ghast",
        description: "Uma criatura voadora do Nether que dispara bolas de fogo.",
        img: "https://minecraft.wiki/images/thumb/Ghast.png/150px-Ghast.png"
    },
    {
        title: "Blaze",
        description: "Uma criatura do Nether que dispara bolas de fogo.",
        img: "https://minecraft.wiki/images/thumb/Blaze.png/150px-Blaze.png"
    },
    
    {
        title: "Zoglin",
        description: "Uma versão do zumbi pigman, mais forte e agressiva.",
        img: "https://minecraft.wiki/images/thumb/Zoglin.png/150px-Zoglin.png"
    },
    {
        title: "Piglin",
        description: "Habitantes do Nether, trocam itens com o jogador se ele estiver usando ouro.",
        img: "https://minecraft.wiki/images/thumb/Piglin.png/150px-Piglin.png"
    },
    {
        title: "Phantom",
        description: "Ataca o jogador durante a noite.",
        img: "https://minecraft.wiki/images/thumb/Phantom.png/150px-Phantom.png"
    },
    {
        title: "Zumbi Afogado",
        description: "Uma versão afogada do zumbi, encontrada em oceanos.",
        img: "https://minecraft.wiki/images/thumb/Drowned.png/150px-Drowned.png"
    },
    {
        title: "Guardian",
        description: "Uma criatura aquática hostil, encontrada em oceanos monumentais.",
        img: "https://minecraft.wiki/images/thumb/Guardian.png/150px-Guardian.png"
    },
    {
        title: "Elder Guardian",
        description: "Uma versão mais forte do guardian, que lança espinhos.",
        img: "https://minecraft.wiki/images/thumb/Elder_Guardian.png/150px-Elder_Guardian.png"
    },
    {
        title: "Vindicator",
        description: "Um illager hostil, equipado com uma espada de ferro.",
        img: "https://minecraft.wiki/images/thumb/Vindicator.png/150px-Vindicator.png"
    },
    {
        title: "Evoker",
        description: "Um illager hostil, que invoca vex e lança feitiços.",
        img: "https://minecraft.wiki/images/thumb/Evoker.png/150px-Evoker.png"
    },
    {
        title: "Pillager",
        description: "Um illager hostil, equipado com um arco.",
        img: "https://minecraft.wiki/images/thumb/Pillager.png/150px-Pillager.png"
    },
    {
        title: "Bruxa",
        description: "Uma bruxa hostil, que lança poções.",
        img: "https://minecraft.wiki/images/thumb/Witch.png/150px-Witch.png"
    },
    {
        title: "Husk",
        description: "Uma versão desidratada do zumbi, encontrada em desertos.",
        img: "https://minecraft.wiki/images/thumb/Husk.png/150px-Husk.png"
    },
    {
        title: "Stray",
        description: "Uma versão esqueleta desidratada, encontrada em desertos.",
        img: "https://minecraft.wiki/images/thumb/Stray.png/150px-Stray.png"
    },
    {
        title: "Ender Dragon",
        description: "O chefe final do jogo, encontrado no End.",
        img: "https://minecraft.wiki/images/thumb/Ender_Dragon.png/150px-Ender_Dragon.png"
    },
    {
        title: "Wither",
        description: "Um chefe invocado pelo jogador, usando Wither Skulls.",
        img: "https://minecraft.wiki/images/thumb/Wither.png/150px-Wither.png"
    },

    {
        title: "Allay",
        description: "Uma criatura pacífica que coleta itens.",
        img: "https://minecraft.wiki/images/thumb/Allay.png/150px-Allay.png"
    },
    {
        title: "Glow Squid",
        description: "Uma criatura marinha que brilha no escuro.",
        img: "https://minecraft.wiki/images/thumb/Glow_Squid.png/150px-Glow_Squid.png"
    },
    {
        title: "Camel",
        description: "Um animal de transporte que pode atravessar desertos.",
        img: "https://minecraft.wiki/images/thumb/Camel.png/150px-Camel.png"
    },
    {
        title: "Moshroom",
        description: "Uma criatura pacífica encontrada em florestas de cogumelos.",
        img: "https://minecraft.wiki/images/thumb/Moshroom.png/150px-Moshroom.png"
    },
    {
        title: "Sniffer",
        description: "Uma criatura antiga que pode encontrar sementes antigas.",
        img: "https://minecraft.wiki/images/thumb/Sniffer.png/150px-Sniffer.png"
    },
    {
        title: "Armadillo",
        description: "Uma criatura pacífica que pode se enrolar em uma bola.",
        img: "https://minecraft.wiki/images/thumb/Armadillo.png/150px-Armadillo.png"
    },
    {
        title: "Parrot",
        description: "Uma ave que pode imitar sons.",
        img: "https://minecraft.wiki/images/thumb/Parrot.png/150px-Parrot.png"
    },
    {
        title: "Wandering Trader",
        description: "Um comerciante ambulante que vende itens raros.",
        img: "https://minecraft.wiki/images/thumb/Wandering_Trader.png/150px-Wandering_Trader.png"
    },
    {
        title: "Strider",
        description: "Uma criatura do Nether que anda sobre lava.",
        img: "https://minecraft.wiki/images/thumb/Strider.png/150px-Strider.png"
    },
    {
        title: "Goat",
        description: "Um animal que pode pular muito alto.",
        img: "https://minecraft.wiki/images/thumb/Goat.png/150px-Goat.png"
    },
    {
        title: "Polar Bear",
        description: "Um urso grande e forte encontrado em biomas de neve.",
        img: "https://minecraft.wiki/images/thumb/Polar_Bear.png/150px-Polar_Bear.png"
    },
    {
        title: "Zombified Piglin",
        description: "Uma versão zumbificada do piglin.",
        img: "https://minecraft.wiki/images/thumb/Zombified_Piglin.png/150px-Zombified_Piglin.png"
    },
    {
        title: "Warden",
        description: "Uma criatura hostil que guarda as cidades antigas.",
        img: "https://minecraft.wiki/images/thumb/Warden.png/150px-Warden.png"
    },
    {
        title: "Vex",
        description: "Uma criatura pequena e agressiva.",
        img: "https://minecraft.wiki/images/thumb/Vex.png/150px-Vex.png"
    },
    {
        title: "Hoglin",
        description: "Uma criatura hostil do Nether.",
        img: "https://minecraft.wiki/images/thumb/Hoglin.png/150px-Hoglin.png"
    },
    {
        title: "Shulker",
        description: "Uma criatura hostil que pode se esconder em sua concha.",
        img: "https://minecraft.wiki/images/thumb/Shulker.png/150px-Shulker.png"
    },


    {
        title: "Allay",
        description: "Uma criatura pacífica que coleta itens.",
        img: "https://minecraft.wiki/images/thumb/Allay.png/150px-Allay.png"
    },
    {
        title: "Glow Squid",
        description: "Uma criatura marinha que brilha no escuro.",
        img: "https://minecraft.wiki/images/thumb/Glow_Squid.png/150px-Glow_Squid.png"
    },
    {
        title: "Camel",
        description: "Um animal de transporte que pode atravessar desertos.",
        img: "https://minecraft.wiki/images/thumb/Camel.png/150px-Camel.png"
    },
    {
        title: "Moshroom",
        description: "Uma criatura pacífica encontrada em florestas de cogumelos.",
        img: "https://minecraft.wiki/images/thumb/Moshroom.png/150px-Moshroom.png"
    },
    {
        title: "Sniffer",
        description: "Uma criatura antiga que pode encontrar sementes antigas.",
        img: "https://minecraft.wiki/images/thumb/Sniffer.png/150px-Sniffer.png"
    },
    {
        title: "Armadillo",
        description: "Uma criatura pacífica que pode se enrolar em uma bola.",
        img: "https://minecraft.wiki/images/thumb/Armadillo.png/150px-Armadillo.png"
    },
    {
        title: "Parrot",
        description: "Uma ave que pode imitar sons.",
        img: "https://minecraft.wiki/images/thumb/Parrot.png/150px-Parrot.png"
    },
    {
        title: "Wandering Trader",
        description: "Um comerciante ambulante que vende itens raros.",
        img: "https://minecraft.wiki/images/thumb/Wandering_Trader.png/150px-Wandering_Trader.png"
    },
    {
        title: "Strider",
        description: "Uma criatura do Nether que anda sobre lava.",
        img: "https://minecraft.wiki/images/thumb/Strider.png/150px-Strider.png"
    },
    {
        title: "Goat",
        description: "Um animal que pode pular muito alto.",
        img: "https://minecraft.wiki/images/thumb/Goat.png/150px-Goat.png"
    },
    {
        title: "Polar Bear",
        description: "Um urso grande e forte encontrado em biomas de neve.",
        img: "https://minecraft.wiki/images/thumb/Polar_Bear.png/150px-Polar_Bear.png"
    },
    {
        title: "Zombified Piglin",
        description: "Uma versão zumbificada do piglin.",
        img: "https://minecraft.wiki/images/thumb/Zombified_Piglin.png/150px-Zombified_Piglin.png"
    },
    {
        title: "Warden",
        description: "Uma criatura hostil que guarda as cidades antigas.",
        img: "https://minecraft.wiki/images/thumb/Warden.png/150px-Warden.png"
    },
    {
        title: "Vex",
        description: "Uma criatura pequena e agressiva.",
        img: "https://minecraft.wiki/images/thumb/Vex.png/150px-Vex.png"
    },
    {
        title: "Hoglin",
        description: "Uma criatura hostil do Nether.",
        img: "https://minecraft.wiki/images/thumb/Hoglin.png/150px-Hoglin.png"
    },
    {
        title: "Shulker",
        description: "Uma criatura hostil que pode se esconder em sua concha.",
        img: "https://minecraft.wiki/images/thumb/Shulker.png/150px-Shulker.png"
    },

    {
        title: "Hogged",
        description: "Uma criatura hostil que ataca o jogador em grupos.",
        link: "https://minecraft.wiki/w/Hogged",
        img: "https://minecraft.wiki/images/thumb/Hogged.png/150px-Hogged.png"
    },
    {
        title: "Breeze",
        description: "Uma criatura pacífica que flutua no ar.",
        link: "https://minecraft.wiki/w/Breeze",
        img: "https://minecraft.wiki/images/thumb/Breeze.png/150px-Breeze.png"
    },
    {
        title: "Endermite",
        description: "Uma criatura hostil que ataca o jogador em grupos.",
        link: "https://minecraft.wiki/w/Endermite",
        img: "https://minecraft.wiki/images/thumb/Endermite.png/150px-Endermite.png"
    },
    {
        title: "Silverfish",
        description: "Uma criatura hostil que se esconde em blocos de pedra.",
        link: "https://minecraft.wiki/w/Silverfish",
        img: "https://minecraft.wiki/images/thumb/Silverfish.png/150px-Silverfish.png"
    },
    {
        title: "Ravager",
        description: "Uma criatura hostil que ataca o jogador e seus aliados.",
        link: "https://minecraft.wiki/w/Ravager",
        img: "https://minecraft.wiki/images/thumb/Ravager.png/150px-Ravager.png"
    },
    {
        title: "Piglin Brute",
        description: "Uma versão mais forte do piglin.",
        link: "https://minecraft.wiki/w/Piglin_Brute",
        img: "https://minecraft.wiki/images/thumb/Piglin_Brute.png/150px-Piglin_Brute.png"
    },
    {
        title: "Wither Skeleton",
        description: "Uma versão esqueleta do wither, que lança projéteis venenosos.",
        link: "https://minecraft.wiki/w/Wither_Skeleton",
        img: "https://minecraft.wiki/images/thumb/Wither_Skeleton.png/150px-Wither_Skeleton.png"
    }

]