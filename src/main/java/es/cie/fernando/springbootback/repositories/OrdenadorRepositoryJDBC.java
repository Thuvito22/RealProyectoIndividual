package es.cie.fernando.springbootback.repositories;

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
       
        return plantilla.query("select * from ordenador order by ? ?", new OrdenadorRowMapper(), campo, direccion);
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


 