package es.cie.fernando.springbootback.repositories;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import es.cie.fernando.springbootback.negocio.Ordenador;



    @Repository
@Qualifier("jdbc")
public class OrdenadorRepositoryJDBC implements OrdenadorRepository {


    
    @Autowired
    private JdbcTemplate plantilla;


    @Override
    public List<Ordenador> buscarTodos() {
        
      return plantilla.query("select * from ordenador", new OrdenadorRowMapper());
    }

     @Override
    public List<Ordenador> buscarOrdenados(String campo, String direccion) {
       List<String> validCampos = Arrays.asList("numserie", "marca", "modelo", "precio"); 
    List<String> validDirecciones = Arrays.asList("ASC", "DESC"); 

    if (!validCampos.contains(campo) || !validDirecciones.contains(direccion)) {
        throw new IllegalArgumentException("Parametros invalidos");
    }

    String sql = String.format("SELECT * FROM ordenador ORDER BY %s %s", campo, direccion);
    
    return plantilla.query(sql, new OrdenadorRowMapper()); 
    }


    @Override
    public void insertar(Ordenador ordenador) {
        
        
        plantilla.update("insert into ordenador values(?,?,?,?)",
                ordenador.getNumserie(),
                ordenador.getMarca(),
                ordenador.getModelo(),
                ordenador.getPrecio());
    }

    @Override
    public void borrar(int numserie) {
        
        plantilla.update("delete from ordenador where numserie = ?", numserie);
    }
}



 