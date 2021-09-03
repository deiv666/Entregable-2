const express=require('express');
const app=express();
const morgan=require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json()); //Empezar a recibir formato Json y entenderlo

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/user', require('./routes/user'));

//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});