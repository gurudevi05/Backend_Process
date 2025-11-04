
export const printTitle=(movie)=>{

    console.log(`Movie${movie.Title} (${movie.Year})`);
    
}

export const printDirector=(movie)=>{

    console.log(`Director:${movie.Director}`);
    
}

export const shoutLead=(movie)=>{


     console.log(`Lead Actor${movie.LeadActor.toUpperCase()}!!!`);
     
};