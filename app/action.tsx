"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
    try {
        const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);
        
        // Check if the response is successful
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            return null; // Or handle error appropriately
        }

        const data = await response.json();
        return  data.map((item: AnimeProp, index: number) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ));
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error appropriately
    }
};
