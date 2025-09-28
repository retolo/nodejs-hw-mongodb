

function parseSortBy(sortBy){
    if(typeof sortBy === 'undefined'){
        return '_id'
    }


    const params =[
        'name',
        'phoneNumber',
        'email',
        'isFavourite',
        'contactType',

    ];
    if(params.includes(sortBy)){
        return sortBy;
    }


    return '_id'
}



function parseSortOrder(sortOrder){
    if(typeof sortOrder === 'undefined'){
        return 'asc'
    }

    if(sortOrder !== 'asc' && sortOrder !== 'desc'){
        return 'asc'
    }



    return sortOrder

}



export function parseSortParams(query) {
    const {sortBy, sortOrder} = query;

    const parsedSortBy = parseSortBy(sortBy);
    const parsedSortOrder = parseSortOrder(sortOrder);


    return{
        sortBy: parsedSortBy,
        sortOrder: parsedSortOrder,
    }

}



